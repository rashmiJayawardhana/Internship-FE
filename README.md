# Eight25 Internship Assignment (Frontend)

The project involves converting sections from a provided Figma design into a fully functional static website using HTML, CSS, and JavaScript. Additionally, it includes a Dockerfile for containerized deployment and virtual host configurations for Apache and Nginx.

## Project Overview

The project implements four sections from the Figma design:

1. **Hero Section**: Features floating logos on the left and right with centered text and a call-to-action button.
2. **AI Section**: Includes text with a button and overlapping images, styled with a gradient background.
3. **Rating Section**: Displays a slider with text and a background wave image.
4. **Journey Section**: A call-to-action section with centered text and background images.

### Features
- **HTML**: Clean, semantic markup with proper alt attributes for accessibility.
- **CSS**: Styled using `styles.css`, focusing on replicating the Figma design, including fonts (DM Sans), colors, spacing, and responsive behavior for tablets (1024px), mobile devices (768px), and small screens (544px).
- **JavaScript**: Implements a fade-in animation for sections using the Intersection Observer API (`script.js`).
- **Docker**: Includes a `Dockerfile` and `nginx.conf` to set up an Nginx container, exposing port 80 and mapping it to port 3000 on the host, with a volume to sync public files.
- **Virtual Hosts**: Provides configurations for Apache and Nginx to serve the site at `http://eight25-internship-assessment.test`.

### Live Demo
The site is deployed on Vercel and can be accessed at:  
**[https://internship-assignment-rashmi-jayawardhana.vercel.app/](https://internship-assignment-rashmi-jayawardhana.vercel.app/)**

## Setup Instructions

### Prerequisites
- **Node.js** (for Vercel CLI, optional for deployment)
- **Docker** (for running the container locally)
- **Git** (to clone the repository)

### Local Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rashmiJayawardhana/Internship-FE.git
   cd Internship-FE
   ```

#### Run Locally Without Docker:
Open `index.html` in a browser (e.g., double-click `index.html` or use a local server like Live Server in VS Code).

#### Run Locally With Docker:

**Build the Docker image:**
```bash
docker build -t eight25-internship .
```

**Run the container:**

**Unix:**
```bash
docker run -d -p 3000:80 -v $(pwd):/usr/share/nginx/html --name eight25-container eight25-internship
```

**Windows:**
```bash
docker run -d -p 3000:80 -v C:/path/to/eight25-internship-assignment:/usr/share/nginx/html --name eight25-container eight25-internship
```

Access the site at: [http://localhost:3000](http://localhost:3000)

### Virtual Host Setup (Optional)
To serve the site at `http://eight25-internship-assessment.test` locally:

#### Apache (Windows)
1. Install Apache (e.g., via Apache Lounge) and place it in `C:\Apache24`.
2. Add the following to `C:\Apache24\conf\extra\httpd-vhosts.conf`:
   ```apache
   <VirtualHost *:80>
       ServerName eight25-internship-assessment.test
       ServerAlias www.eight25-internship-assessment.test
       DocumentRoot "C:/webroot/eight25-internship-assignment"
       <Directory "C:/webroot/eight25-internship-assignment">
           Options -Indexes +FollowSymLinks
           AllowOverride All
           Require all granted
       </Directory>
       ErrorLog "C:/Apache24/logs/eight25-error.log"
       CustomLog "C:/Apache24/logs/eight25-access.log" combined
   </VirtualHost>
   ```
3. Copy project files to `C:\webroot\eight25-internship-assignment`.
4. Restart Apache:
   ```bash
   httpd -k restart
   ```

#### Nginx (Windows)
1. Install Nginx and place it in `C:\nginx`.
2. Replace the `http` block in `C:\nginx\conf\nginx.conf` with:
   ```nginx
   http {
       include       mime.types;
       default_type  application/octet-stream;
       sendfile        on;
       keepalive_timeout  65;
       server {
           listen       80;
           server_name  eight25-internship-assessment.test;
           location / {
               root   C:/webroot/eight25-internship-assignment;
               index  index.html index.htm;
               try_files $uri $uri/ /index.html;
           }
           error_log  C:/nginx/logs/eight25-error.log;
           access_log C:/nginx/logs/eight25-access.log;
       }
   }
   ```
3. Copy project files to `C:\webroot\eight25-internship-assignment`.
4. Reload Nginx:
   ```bash
   cd C:\nginx
   nginx -s reload
   ```

#### Hosts File
Add the following entry to `C:\Windows\System32\drivers\etc\hosts` (run Notepad as Administrator):
```text
127.0.0.1 eight25-internship-assessment.test
```

Access the site at: [http://eight25-internship-assessment.test](http://eight25-internship-assessment.test)

## Deployment to Vercel
The site is deployed on Vercel for easy access.

### Steps to Deploy

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Log in to Vercel:
   ```bash
   vercel login
   ```
3. Deploy the project:
   ```bash
   vercel deploy
   ```
   Follow the prompts to deploy. The live URL will be provided after deployment.

**Live URL:** [https://eight25-internship-assessment.vercel.app/](https://eight25-internship-assessment.vercel.app/)
