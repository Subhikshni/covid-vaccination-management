# COVID Vaccination Management System

This system provides a platform for managing COVID vaccination centers and appointments. It consists of two main views: Admin view and User view.

## Admin View

In the Admin view, authenticated administrators have access to the following functionalities:

- Add vaccination centers: Admins can add new vaccination centers with details such as location, operating hours, and available doses.
- Delete vaccination centers: Admins can remove existing vaccination centers if necessary.

### Authentication

Admins need to be authenticated before accessing the admin view. Authentication ensures that only authorized personnel can make changes to the system.

## User View

In the User view, individuals can book vaccination slots at available centers. Here's how the process works:

1. Users browse available vaccination centers and their respective available slots.
2. Users select a suitable vaccination center and a preferred time slot.
3. Once a slot is booked, the available dose count for that slot decreases, indicating the reservation.

### Slot Availability

The system dynamically updates slot availability based on bookings. If a slot reaches its maximum capacity, it becomes unavailable for further bookings.

## Technologies Used

- Backend: NodeJs, ExpressJs
- Frontend: HTML, CSS, Javascript 
- Database:MySQL


## ScreenShots

![Screenshot (65)](https://github.com/Subhikshni/covid-vaccination-management/assets/99553204/efc5316d-9695-40b6-a5f0-010f667f76e9)


![Screenshot (66)](https://github.com/Subhikshni/covid-vaccination-management/assets/99553204/121cf2af-683c-4175-b4e6-96d7e218df10)

![Screenshot (67)](https://github.com/Subhikshni/covid-vaccination-management/assets/99553204/045168c3-beed-4c28-ba8d-0fe98f8e3190)


![Screenshot (68)](https://github.com/Subhikshni/covid-vaccination-management/assets/99553204/9595107c-8785-43e3-9faf-dffdcccc071b)















