
## <img src="images/image.png" alt="MangoHQ Logo" width="40" height="30"> MangoHQ - Premium Mangoes E-Commerce Platform

 <img src="/images/mango.png" alt="Mango Screenshot" width="800" height="200">

##  Overview
MangoHQ is a modern e-commerce platform specializing in premium White Chaunsa mangoes, offering Special packages with both online payment and COD options.

<div align="center">
  <img src="images/image.png" alt="MangoHQ Logo" width="1000" height="400" style="margin: 80px 0">
</div>


##  Features
- 🛒 Guest & user checkout flows
- 💳 Stripe payments + Cash on Delivery
- 📱 Fully responsive design
- 📊 Real-time admin dashboard
- 📦 Package management (5kg/10kg)
- ✉️ Automated order confirmation emails
- ⭐ Customer review system

## Made by
<div align="center" style="margin: 40px 0; padding: 20px; background: #f8f9fa; border-radius: 10px;"> <a href="https://github.com/Khizarkk7" style="text-decoration: none;"> <img src="https://avatars.githubusercontent.com/u/12345678?v=4" alt="Khizar Saqib" width="120" style="border-radius: 50%; border: 3px solid #FFD700; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"> <br> <strong style="font-size: 1.2em; color: #333; margin-top: 10px;">Khizar Saqib</strong> <p style="color: #666; margin-top: 5px;">Full Stack Developer</p> <img src="https://img.shields.io/github/followers/Khizarkk7?style=social" alt="GitHub followers"> </a> </div>

##  Technical Architecture

```mermaid
flowchart LR
    A[Next.js Frontend] -->|API Calls| B[Firebase Firestore]
    A -->|Authentication| C[Firebase Auth]
    A -->|Payments| D[Stripe]
    B --> E[Admin Dashboard]
    C --> F[User Profiles]
    D --> G[Order Confirmations]





