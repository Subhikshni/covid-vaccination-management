document.addEventListener("DOMContentLoaded", function () {
  function fetchAndPopulateCenterData() {
    fetch("http://localhost:3001/api/admin/centers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch center data");
        }
        return response.json();
      })
      .then((data) => {
        const tableBody = document.querySelector("#centerData");
        tableBody.innerHTML = "";
        data.forEach((center) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${center.pincode}</td>
            <td>${center.centerName}</td>
            <td>${center.slotSession}</td>
            <td>${center.slotsAvailability}</td>
            <td><button class="deleteBtn" data-id="${center.id}">Delete</button></td> <!-- Add delete button with center ID -->
          `;
          tableBody.appendChild(row);
        });
        const deleteButtons = document.querySelectorAll(".deleteBtn");
        deleteButtons.forEach((button) => {
          button.addEventListener("click", () => {
            const centerId = button.getAttribute("data-id");
            deleteCenter(centerId);
          });
        });
      })
      .catch((error) => {
        console.error("Error fetching center data:", error);
        alert("Failed to fetch center data. Please try again.");
      });
  }
  function deleteCenter(centerId) {
    fetch(`http://localhost:3001/api/admin/centers/${centerId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete center");
        }
        fetchAndPopulateCenterData();
      })
      .catch((error) => {
        console.error("Error deleting center:", error);
        alert("Failed to delete center. Please try again.");
      });
  }
  fetchAndPopulateCenterData();

  const addCenterForm = document.getElementById("addCenterForm");

  addCenterForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const pincode = document.getElementById("pincode").value;
    const centerName = document.getElementById("centerName").value;
    const slotSession = document.getElementById("slotSession").value;
    const slotsAvailability =
      document.getElementById("slotsAvailability").value;
    const cdata = {
      pincode: pincode,
      centerName: centerName,
      slotSession: slotSession,
      slotsAvailability: slotsAvailability,
    };
    fetch("http://localhost:3001/api/admin/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cdata),
    })
      .then((response) => {
        if (response.ok) {
          alert("New center added successfully!");
          addCenterForm.reset();
          fetchAndPopulateCenterData();
        } else {
          throw new Error("Failed to add new center");
        }
      })
      .catch((error) => {
        console.error("Error adding new center:", error);
        alert("Failed to add new center. Please try again.");
      });
  });
});
