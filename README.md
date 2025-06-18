
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

##  Technical Architecture

```mermaid
flowchart LR
    A[Next.js Frontend] -->|API Calls| B[Firebase Firestore]
    A -->|Authentication| C[Firebase Auth]
    A -->|Payments| D[Stripe]
    B --> E[Admin Dashboard]
    C --> F[User Profiles]
    D --> G[Order Confirmations]



