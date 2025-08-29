# College Events Registration Website (Frontend)

A modern, responsive platform for  **college technical & cultural events registration**. It is built using **React**, **Tailwind CSS**, **ShadCN UI components** and **Framer Motion**. 

This project allows students to **browse events, view details, and register** for any events being conducted in their college.

---

## Features

- **Landing Page** with hero section, animated banners, and event categories.  
- **Events Listing Page** with filter & search functionality.  
- **Event Details Page** with event information and registration modal.  
- **Clubs & Societies Directory** showcasing all college clubs.  
- **My Registrations** page using **local storage** to track registered events.  


---

## Tech Stack

- **Frontend:** React.js  
- **Styling:** Tailwind CSS  
- **UI Library:** ShadCN UI  
- **Animations:** Framer Motion  

---

## Docker Setup

You can run this frontend app using Docker without installing Node.js locally.

1. **Build the Docker image**:

```bash
docker build -t college-events-frontend .
docker run -p 3000:3000 college-events-frontend
http://localhost:3000
