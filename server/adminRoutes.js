const express = require("express");
const router = express.Router();
const { CenterData } = require("./model");

router.post("/submit", async (req, res) => {
  try {
    const {
      centerName,
      slotsAvailability,
      pincode,
      slotsAvailable,
      slotSession,
    } = req.body;

    const newCenter = await CenterData.create({
      centerName,
      slotsAvailability,
      pincode,
      slotsAvailable,
      slotSession,
    });

    res.status(201).json({ success: true, data: newCenter });
  } catch (error) {
    console.error("Error submitting center data:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit center data. Please try again later.",
    });
  }
});

router.get("/centers", async (req, res) => {
  try {
    const centers = await CenterData.findAll();
    res.json(centers);
  } catch (error) {
    console.error("Error fetching center data:", error);
    res.status(500).json({ error: "Failed to fetch center data" });
  }
});

router.delete("/centers/:id", async (req, res) => {
  try {
    const centerId = req.params.id;
    const centerToDelete = await CenterData.findByPk(centerId);
    if (!centerToDelete) {
      return res
        .status(404)
        .json({ success: false, message: "Center not found" });
    }

    await centerToDelete.destroy();

    res
      .status(200)
      .json({ success: true, message: "Center deleted successfully" });
  } catch (error) {
    console.error("Error deleting center:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete center" });
  }
});

module.exports = router;
