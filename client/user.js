document.addEventListener("DOMContentLoaded", function () {
  function fetchAndPopulateCenterNames() {
    fetch("http://localhost:3001/api/user/centers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch center names");
        }
        return response.json();
      })
      .then((data) => {
        const centerDropdown = document.getElementById("centerName");
        centerDropdown.innerHTML = "";
        data.forEach((centerName) => {
          const option = document.createElement("option");
          option.text = centerName;
          option.value = centerName;
          centerDropdown.appendChild(option);
        });
      })
      .catch((error) => {
        console.error("Error fetching center names:", error);
      });
  }

  fetchAndPopulateCenterNames();

  const bookingForm = document.getElementById("userBookingForm");

  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const Name = document.getElementById("Name").value;
    const age = document.getElementById("age").value;
    const SlotDate = document.getElementById("SlotDate").value;
    const Slot = document.getElementById("Slot").value;
    const Email = document.getElementById("Email").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const centerName = document.getElementById("centerName").value;

    const bookingData = {
      Name: Name,
      age: age,
      SlotDate: SlotDate,
      Slot: Slot,
      Email: Email,
      contactNumber: contactNumber,
      centerName: centerName,
    };

    fetch("http://localhost:3001/api/user/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => {
        if (response.ok) {
          alert("booked!");
          bookingForm.reset();
        } else {
          throw new Error("Failed to book");
        }
      })
      .catch((error) => {
        console.error("Error booking new slot", error);
        alert("Failed to book. Please try again.");
      });
  });
});
