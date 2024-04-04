const { Router } = require("express");
const Demo = require("../services/googlewallet.service");
const EmailService = require("../services/email.service");
const generateAppleTicket = require("../services/appleWallet.service");
const service = new Demo();
const emailService = new EmailService();
const router = new Router();

/**
 * Generate a flow ticket.
 *
 * 1.- Create de Wallet Ticket
 * 2.- Send by gmail
 */
router.post("/generate", async (req, res, next) => {
  // const service = new Demo();
  console.log("Hola mundo");

  try {
    await service.createClass(req.body);
    await service.createObject(req.body);
    response = await service.createJwtNewObjects();
    res.json({ message: "Class created successfully", button: response });
  } catch (error) {
    next(error);
  }
});

router.post("/send-google-ticket", async (req, res, next) => {
  try {
    await service.createClass(req.body);
    await service.createObject(req.body);
    const ticketBody = req.body;
    const linkWToken = await service.createJwtNewObjects();
    // const passenger = "angel";
    const rta = await emailService.sendGMailTicket(ticketBody, linkWToken);
    res.status(200).json(rta);
  } catch (error) {
    next(error);
  }
});

router.post("/send-apple-ticket", async (req, res, next) => {
  try {
    const {
      logos,
      passenger,
      seatNumber,
      from,
      to,
      serviceNumber,
      departureDate,
      boardingGate,
      billingToken,
      folio,
      category,
      price,
      payMethod,
      status,
      service,
      email,
    } = req.body;

    const organization = {
      name: service,
      headerLogo: logos.headerLogo,
      footerLogo: logos.footerLogo,
    };

    const ticket = {
      passenger,
      seatNumber,
      from,
      to,
      serviceNumber,
      departureDate,
      boardingGate,
      billingToken,
      folio,
      category,
      price,
      payMethod,
      status,
    };

    const fileName = await generateAppleTicket(organization, ticket);

    const rta = await emailService.sendAppleTicket(email, "./" + fileName);
    return res.status(200).json(rta);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
