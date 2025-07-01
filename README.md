# Second Chance E-Commerce

Second Chance is a Spring Boot and React-based e-commerce platform designed to provide high-quality, affordable second-hand goods. Our mission is to give pre-loved items a new life through sustainable shopping, offering a curated collection of clothing, accessories, home decor, and more. With a focus on affordability and quality, Second Chance ensures everyone can enjoy a delightful thrifting experience.

## Features

- **Post & Add Products**: Users can add second-hand goods with image, description, price, and category. Form validation with role-based access (Admin/User).
- **Role-Based Login System**: Admins can manage products; users can browse, buy, and post limited listings. Secure login via JWT authentication.
- **Buy Goods Flow**: Users can view listings, check details, and proceed to place orders. Cart/order logic integrated with backend.
- **Cash on Delivery Method**: Simple, familiar payment model for users. No third-party payment integration needed for MVP.

## Technologies

### Backend
- **Spring Boot**: Convention-over-configuration Java framework for RESTful APIs with autoconfiguration, embedded server, and easy dependency management.
- **AWS S3**: Scalable cloud storage for product images, securing URLs via signed requests and IAM policies.
- **JWT**: Stateless token-based authentication for secure access, using Bearer `<token>` header on each request.

### Frontend
- **React**: Component-based UI library for building interactive interfaces.
- **Redux**: State management for predictable data flow across the application.
- **Tailwind CSS**: Utility-first CSS framework for responsive and modern styling.
- **ShadCN**: UI component library enhancing the user experience with pre-built components.

## Project Structure

### Backend Structure
The backend follows a standard Spring Boot structure:

- **Controllers**: Handle HTTP requests and responses (e.g., `AddressController.java`, `AuthController.java`).
- **Services**: Contain business logic (e.g., `AddressServiceImpl.java`, `ProductServiceImpl.java`).
- **Repositories**: Interface with the database for CRUD operations (e.g., `ProductRepo.java`, `UserRepo.java`).
- **Entities**: Define data models (e.g., `Product.java`, `User.java`).
- **DTOs**: Data Transfer Objects for API communication (e.g., `ProductDto.java`, `UserDto.java`).
- **Enums**: Enumerated types like `OrderStatus` and `UserRole`.
- **Exceptions**: Custom error handling (e.g., `NotFoundException.java`, `InvalidCredentialsException.java`).
- **Security**: Authentication and authorization setup (e.g., `JwtUtils.java`, `SecurityConfig.java`).
- **Mappers**: Convert between entities and DTOs (e.g., `EntityDtoMapper.java`).

### Frontend Structure
The frontend is built with React and organized into reusable components, pages, and utilities:

- **Components**: Reusable UI elements (e.g., `Navbar`, `ProductCard`, `Button`).
- **Pages**: Individual page components corresponding to routes (e.g., `HomePage`, `SignInPage`, `CartPage`).
- **Redux**: Store, actions, and reducers for state management (e.g., `store.js`, `productSlice.js`).
- **Assets**: Static files like images and styles (e.g., Tailwind CSS configuration).
- **Utils**: Helper functions and API calls (e.g., `api.js`, `auth.js`).

## Prerequisites

- Java JDK 11+
- Node.js and npm
- MySQL or preferred database
- AWS S3 bucket for image storage

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/second-chance.git
   ```
2. **Backend Setup**:
   - Navigate to the backend directory: `cd second-chance/backend`
   - Configure `application.properties` with database and AWS S3 credentials:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/second_chance_db
     spring.datasource.username=root
     spring.datasource.password=your_password
     aws.s3.access=your_access_key
     aws.s3.secret=your_secret_key
     secreteJwtString=your_32_char_or_longer_secret_key
     ```
   - Run the application: `./mvnw spring-boot:run`
3. **Frontend Setup**:
   - Navigate to the frontend directory: `cd second-chance/frontend`
   - Install dependencies: `npm install`
   - Start the development server: `npm start`

## Usage

- **Home Page**: Browse featured products and categories.
- **Sign In / Sign Up**: Create an account or log in to access user-specific features.
- **Add New Product**: (Admin only) Add new second-hand products to the platform.
- **Cart**: View and manage items in the shopping cart.
- **Checkout**: Place orders with cash on delivery.

## API Endpoints

### Authentication
- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Log in and receive JWT token.

### Address
- `POST /address/save`: Save or update user address.

### Category
- `POST /category/create`: (Admin) Create a new category or subcategory.
- `PUT /category/update/{categoryId}/{subid}`: (Admin) Update a category or subcategory.
- `GET /category/get-all`: Retrieve all categories and subcategories.
- `GET /category/get-category-by-id/{categoryId}/{subid}`: Get a specific category or subcategory.
- `DELETE /category/delete/{categoryId}/{subid}`: (Admin) Delete a category or subcategory.

### Product
- `POST /product/create`: (Admin) Create a new product.
- `PUT /product/update/{productId}`: (Admin) Update a product.
- `DELETE /product/delete/{productId}`: (Admin) Delete a product.
- `GET /product/get-by-product-id/{productId}`: Get product details by ID.
- `GET /product/get-all`: Retrieve all products.
- `GET /product/get-by-category-id/{categoryId}/{subid}`: Get products by subcategory.
- `GET /product/search?searchValue={value}`: Search products by name or description.

### Order
- `POST /order/create`: Place a new order.
- `PUT /order/update-item-status/{orderItemId}`: (Admin) Update order item status.
- `GET /order/filter`: (Admin) Filter orders by status, date, or item ID.

### User
- `GET /user/get-all`: (Admin) Retrieve all users.
- `GET /user/my-info`: Get logged-in user’s info and order history.

## Frontend Pages

The frontend includes the following pages, designed with React, Tailwind CSS, and ShadCN components:

- **Home Page**: Displays featured products and categories (2 variations: Home Page - 1 and Home Page - 2).
<img width="951" alt="Image" src="https://github.com/user-attachments/assets/0851a282-82d8-432f-b534-efdcec11c02f" />
<img width="947" alt="Image" src="https://github.com/user-attachments/assets/4854f502-bb17-428c-90a6-6a38d886f066" />

- **Sign In**: User login page with email and password fields.
<img width="950" alt="Image" src="https://github.com/user-attachments/assets/0afef6e7-ea06-42db-a2c9-c14870b4eba7" />

- **Sign Up**: User registration page with form validation.
<img width="950" alt="Image" src="https://github.com/user-attachments/assets/ce5cafca-2e2e-4239-bdef-7abd6f7e8ec2" />

- **About Us**: Information about Second Chance’s mission and values.
<img width="951" alt="Image" src="https://github.com/user-attachments/assets/bf19dcd2-6203-4933-ba77-858960319053" />

- **Add New Product**: (Admin) Form to add products with fields for image, description, price, and category.
<img width="948" alt="Image" src="https://github.com/user-attachments/assets/027316f3-bb4f-47cd-bca5-f6e2a06f2068" />

- **Cart**: Shopping cart management with item summary and checkout option.
<img width="950" alt="Image" src="https://github.com/user-attachments/assets/c6d1a564-62c4-4ff9-8136-f2ff87b3cd62" />

- **Add Categories**: (Admin) Interface to manage categories and subcategories.
<img width="960" alt="Image" src="https://github.com/user-attachments/assets/f1929283-0e0b-4242-ba80-db4ce25058d3" />

- **Contact Us**: Contact form or information for user inquiries.
<img width="952" alt="Image" src="https://github.com/user-attachments/assets/782c5410-1beb-4b04-9a1c-47226f06b06d" />
  
- **Dashboard**: User or admin dashboard with personalized data and controls.
  <img width="949" alt="Image" src="https://github.com/user-attachments/assets/28039bde-d004-49fc-8686-d6596dfaab81" />

- **Delivery Success**: Confirmation page displayed after successful delivery.
 <img width="950" alt="Image" src="https://github.com/user-attachments/assets/3b7a7696-30b9-4777-878e-f483b42d9681" />
  
- **Payment Confirmation**: Order placement confirmation with order details.
 <img width="949" alt="Image" src="https://github.com/user-attachments/assets/33696ffc-d745-48f5-a133-3c96e9326e36" />
   
- **View Product**: Detailed view of a single product with images and description.
  <img width="948" alt="Image" src="https://github.com/user-attachments/assets/be208ed8-66b3-4580-87ce-339954bb883e" />

- **Products**: Product listing page with filtering and sorting options.
<img width="955" alt="Image" src="https://github.com/user-attachments/assets/67c6149a-e16e-4da7-bfcd-9da6c84daef1" />
  
- **Search**: Search results page displaying products matching the query.
<img width="943" alt="Image" src="https://github.com/user-attachments/assets/8fd4dfee-5c0e-4802-9abf-7be629dc1d25" />

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.
