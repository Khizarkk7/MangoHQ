
## <img src="images/image.png" alt="MangoHQ Logo" width="40" height="40"> MangoHQ - Premium Mangoes E-Commerce Platform

![MangoHQ Banner](https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80)

<div align="center">
  <img src="images/image.png" alt="MangoHQ Logo" width="1400" style="margin: 80px 0">
</div>

##  Overview
MangoHQ is a modern e-commerce platform specializing in premium White Chaunsa mangoes, offering Special packages with both online payment and COD options.

 <img src="/images/mango.png" alt="Mango Screenshot" width="800" height="150">

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