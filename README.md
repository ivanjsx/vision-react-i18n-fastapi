# VISION

## Project Description

With this website, as a founder, you can check whether your partner is exposing you to the risk of a supply chain attack on your infrastructure.

You do this by entering your partner's IP address. The website will then evaluate whether the IP address is at risk of a supply chain attack and return a risk score for that IP address.

Ultimately, this website is designed to help you make informed decisions when selecting partners.

## See It In Action

Frontend: [vision.ivanjsx.com](https://vision.ivanjsx.com)

Backend: [api.vision.ivanjsx.com](https://api.vision.ivanjsx.com)

## My Role In It

The project consists of three major parts: **frontend**, **backend**, and what I call **core**.

The **core** is a script responsible for the actual risk assessment of the IP address. It is written in Python and is not part of this repository. The **core** is also the **only part** of the project that is **not my work**. I was responsible for everything else, including, but not limited to:

- overall app **architecture**
- **integration** of the core into the backend
- **design** of the frontend
- **copywriting & internationalization** of the app
- selection of **frameworks & libraries**
- implementation of the frontend
- development of the backend
- **deployment** of both frontend & backend

The history of this repository is solely dedicated to frontend, as both backend & core are classified due to potential commercial interests.

## Technologies Used

- I chose **React** as the primary framework along with **TypeScript** to ensure type safety.
- Internationalization is powered by **i18n** and its associated libraries.
- **CSS modules** are used to ensure straightforward styling and adaptability to all screen sizes.
- I utilized **Nginx** (as a reverse proxy server) to route requests to the correct service.
- I also set up **SSL certificates** using Let's Encrypt to secure the connection.
- Frontend and backend are hosted on **separate subdomains**.
- Frontend is served by **Nginx** (as a web server) inside a Docker container.
- The project was built using a **multi-stage Docker build** approach.
- Containers are orchestrated via **Docker Compose**.
- Backend is a multi-threaded **FastAPI** app served by **Uvicorn** inside a Docker container.
- **Python** was chosen for the backend to ensure high performance, scalability, and seamless integration with the core.