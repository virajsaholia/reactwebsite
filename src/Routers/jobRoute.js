const express = require('express')
const multer = require('multer');
const careerSchema = require("./../models/job")
const jobresponse = require("./../models/jobResponse")
const blogresponse = require("./../models/blogResponse")
const contact = require("./../models/contactForm")
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

router.use(cors());
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

router.post('/webtest', upload.single('jobimg'), async (req, res) => {
  const { jobname, positionnumber } = req.body;

  if (!req.file) {
    return res.status(400).json({
      status: 'FAILED',
      message: 'No image provided',
    });
  }

  const jobimg = req.file.buffer.toString('base64');
  const data = new careerSchema({ jobname, positionnumber, jobimg });

  try {
    const result = await data.save();

if (!result) {
  res.json({
    status: 'FAILED',
    message: 'Job not registered successfully...',
  });
} else {
  res.json({
    status: 'SUCCESS',
    message: 'Job registered successfully...',
    data: result,
  });
}
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'FAILED',
      message: 'Internal Server Error',
    });
  }
});

//get records 
router.get("/careerSchema", async (req, res) => {
    console.log("GET request to /careerSchema received");
    try {
        const result = await careerSchema.find()
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Not found record"
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Records found",
                data: result
            })
        }
    }
    catch (e) {
        console.log(e)
    }
})

router.get("/jobresponse", async (req, res) => {
  console.log("GET request to /jobresponse received");
  try {
      const result = await jobresponse.find()
      if (!result) {
          res.json({
              status: "FAILED",
              message: "Not found record"
          })
      }
      else {
          res.json({
              status: "SUCCESS",
              message: "Records found",
              data: result
          })
      }
  }
  catch (e) {
      console.log(e)
  }
})

//get single record
router.get("/webtest/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await webtest.findById(_id);
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Record not found on this ID"
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Records found",
                data: result
            })
        }
    }
    catch (e) {
        res.send(e)
    }
})
// update records 
router.put("/webtest/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await webtest.findByIdAndUpdate(_id,req.body,{new: true});
        console.log(result)
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Records not Update....",
                data: result
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Record is Updated successfully...",
                data: result
            })
        }
    }
    catch (e) {
        res.send(e)
    }
})
// Delete Records 
router.delete("/webtest/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await webtest.findByIdAndDelete(_id);
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Record not Delete..."
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Record is Delete successfully..."
            })
        }
    }
    catch (e) {
        res.send(e)
    }
})

router.post('/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  const data = new contact({ name, email, phone, subject, message });

  try {
    const result = await data.save();

if (!result) {
  res.json({
    status: 'FAILED',
    message: 'Contact not added',
  });
} else {
  sendNotificationEmail(name, email, phone, subject, message);

  res.json({
    status: 'SUCCESS',
    message: 'Contact added',
    data: result,
  });
}
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'FAILED',
      message: 'Internal Server Error',
    });
  }
});

function sendNotificationEmail(name, email, phone, subject, message) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vs.jupical@gmail.com', 
      pass: 'rbkofkkvuzkmljnj',
    },
  });

  const mailOptions = {
    from: 'vs.jupical@gmail.com',
    to: 'saholiaviraj@gmail.com',
    subject: `New Contact Form Submission - ${subject}`,
    text: `Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Subject: ${subject}
      Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending notification email:', error);
    } else {
      console.log('Notification email sent:', info.response);
      res.redirect('/ThankyouContact')
    }
  });
}

router.post('/jobresponse', upload.single('Resume'), async (req, res) => {
  const { jobName, name, email, phone, coverletter } = req.body;

  if (!req.file) {
    return res.status(400).json({
      status: 'FAILED',
      message: 'No image provided',
    });
  }

  const Resume = req.file.buffer.toString('base64');
  const data = new jobresponse({ jobName, name, email, phone, coverletter, Resume });

  try {
    const result = await data.save();

if (!result) {
  res.json({
    status: 'FAILED',
    message: 'Job not registered successfully...',
  });
} else {
  jobResponseEmailNotification(name, email, phone, jobName, 'New Job Response', coverletter, Resume);

  res.json({
    status: 'SUCCESS',
    message: 'Job registered successfully...',
    data: result,
  });
}
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'FAILED',
      message: 'Internal Server Error',
    });
  }
});

function jobResponseEmailNotification(name, email, phone, jobName, subject, coverletter, Resume) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vs.jupical@gmail.com', 
      pass: 'rbkofkkvuzkmljnj', 
    },
  });

  const mailOptions = {
    from: 'vs.jupical@gmail.com',
    to: 'saholiaviraj@gmail.com', 
    subject: subject,
    text: `Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Applying For: ${jobName}
      Cover Letter: ${coverletter}`,
    attachments: [
      {
        filename: 'Resume.pdf', 
        content: Resume,
        encoding: 'base64',
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending notification email:', error);
    } else {
      console.log('Notification email sent:', info.response);
    }
  });
}

router.delete('/jobresponse/:id', async (req, res) => {
  const jobId = req.params.id;

  try {
    const result = await jobresponse.findByIdAndDelete(jobId);

if (!result) {
  return res.status(404).json({
    status: 'FAILED',
    message: 'Job not found for deletion',
  });
}

res.json({
  status: 'SUCCESS',
  message: 'Job deleted successfully',
  data: result,
});
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'FAILED',
      message: 'Internal Server Error',
    });
  }
});
router.post('/blogresponse', async (req, res) => {
  const { comments, name, email, website } = req.body;
  const data = new blogresponse({  comments, name, email, website  });

  try {
    const result = await data.save();

if (!result) {
  res.json({
    status: 'FAILED',
    message: 'Blog Response not added',
  });
} else {
  sendNotificationBlog( comments, name, email, website);

  res.json({
    status: 'SUCCESS',
    message: 'Blog Response added',
    data: result,
  });
}
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'FAILED',
      message: 'Internal Server Error',
    });
  }
});

function sendNotificationBlog(comments, name, email, website) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vs.jupical@gmail.com',
      pass: 'rbkofkkvuzkmljnj',
    },
  });

  const mailOptions = {
    from: 'vs.jupical@gmail.com',
    to: 'saholiaviraj@gmail.com',
    text: `Comments: ${comments}
      Name: ${name}
      Email: ${email}
      Website: ${website}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending notification email:', error);
    } else {
      console.log('Notification email sent:', info.response);
      res.redirect('/')
    }
  });
}
module.exports = router