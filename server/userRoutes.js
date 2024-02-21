const express = require("express");
const router = express.Router();
const { CovidData, CenterData } = require("./model");
router.get("/centers", async (req, res) => {
  try {
    const centers = await CenterData.findAll({ attributes: ["centerName"] });
    const centerNames = centers.map((center) => center.centerName);
    res.json(centerNames);
  } catch (error) {
    console.error("Error fetching center names:", error);
    res.status(500).json({ error: "Failed to fetch center names" });
  }
});

router.post("/submit", async (req, res) => {
  try {
    const { Name, age, SlotDate, Slot, Email, contactNumber, centerName } =
      req.body;
    const center = await CenterData.findOne({ where: { centerName } });
    if (!center) {
      return res
        .status(404)
        .json({ success: false, message: "Center not found" });
    }
    if (center.slotsAvailability < 1) {
      return res
        .status(400)
        .json({ success: false, message: "Slot not available" });
    }
    const newBooking = await CovidData.create({
      Name,
      age,
      SlotDate,
      Slot,
      Email,
      contactNumber,
      centerName,
    });
    if (center.slotSession === Slot) {
      await CenterData.update(
        { slotsAvailability: center.slotsAvailability - 1 },
        { where: { centerName, slotSession: Slot } }
      );
    }

    res.status(201).json({ success: true, data: newBooking });
  } catch (error) {
    console.error("Error booking new slot:", error);
    res.status(500).json({
      success: false,
      message: "Failed to book slot. Please try again later.",
    });
  }
});

module.exports = router;
