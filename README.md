# VISION

## Project Description

With this website, you, as a founder, can check whether your partner is exposing you to a risk of a supply chain attack on your infrastructure.

You do this by entering the IP address of your partner. The website will then check whether the IP address is at risk of a supply chain attack and return a risk score for the IP address.

Ultimately, his website is designed to help you make better decisions when choosing partners.

## See It In Action

Frontend: [vision.ivanjsx.com](https://vision.ivanjsx.com)

Backend: [api.vision.ivanjsx.com](https://api.vision.ivanjsx.com)

## My Role In It

The project consists of three major parts: **frontend**, **backend** and what I call **core**.

The **core** is a script responsible for the actual risk assessment of the IP address. It is written in Python and is not part of this repository.The **core** is also the **only part** of the project that is **not my work**. I was responsible for all the rest, including, but not limited to:

- overall app architecture
- integration of core into backend
- development of both frontend & backend

The history of this repository is solely dedicated to frontend, as both backend & core are classified because of a potential commercial interest.

## Technologies Used

- I chose **React** as a primary framework along with **Typescript** to ensure type safety.
- Internationalization is powered by **i18n** and its derivatives.
- **CSS modules** ensure straightforward styling and adaptability to all screen sizes.
- I used **Nginx** (as a reverse proxy server) to route requests to the correct service.
- I also set up **SSL certificates** using Let's Encrypt to secure the connection.
- Frontend and backend are hosted on **separate subdomains**.
- Frontend is served by **Nginx** (as a web server) inside a Docker container.
- It was built using **multi-stage Docker build** technique.
- Containers are orchestrated via **Docker Compose**.
