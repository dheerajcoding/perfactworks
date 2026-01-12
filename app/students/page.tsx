'use client'

import { motion } from 'framer-motion'
import { 
  GraduationCap, FileText, Code, Lightbulb, MessageCircle, CheckCircle, 
  Laptop, Database, Globe, Smartphone, ShoppingCart, Users, 
  Calendar, Video, Mail, BookOpen, Award, Clock, Shield
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const detailedProjects = [
  {
    id: 1,
    icon: ShoppingCart,
    title: 'E-Commerce Website',
    description: 'Complete online shopping platform with all modern features',
    longDescription: 'A fully functional e-commerce platform with user authentication, product catalog, shopping cart, order management, payment gateway integration, admin dashboard, and inventory management system.',
    features: [
      'User registration and login system',
      'Product browsing with categories and filters',
      'Shopping cart and wishlist functionality',
      'Secure payment gateway integration',
      'Order tracking and history',
      'Admin panel for product management',
      'Email notifications',
      'Invoice generation',
    ],
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Stripe/Razorpay'],
    difficulty: 'Intermediate',
    duration: '3-4 weeks',
    ideal: 'Final Year, B.Tech/MCA/BCA',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    icon: Users,
    title: 'Student Management System',
    description: 'Complete system for managing student records and administration',
    longDescription: 'A comprehensive CRUD-based management system for educational institutions to manage student information, attendance, grades, courses, and generate reports.',
    features: [
      'Student registration and profile management',
      'Attendance tracking system',
      'Grade and marks management',
      'Course enrollment system',
      'Report card generation',
      'Search and filter functionality',
      'Data export to Excel/PDF',
      'Role-based access control',
    ],
    tech: ['React', 'Express.js', 'MySQL', 'Bootstrap', 'JWT'],
    difficulty: 'Beginner',
    duration: '2-3 weeks',
    ideal: '3rd Year, B.Tech/MCA/BCA',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    icon: MessageCircle,
    title: 'Social Media Platform',
    description: 'Mini social networking application with real-time features',
    longDescription: 'A social networking platform where users can create profiles, post updates, share images, comment, like posts, follow other users, and chat in real-time.',
    features: [
      'User profiles with photo upload',
      'Create, edit, and delete posts',
      'Like and comment system',
      'Follow/Unfollow functionality',
      'Real-time notifications',
      'Private messaging/chat',
      'News feed algorithm',
      'Search users and posts',
    ],
    tech: ['Next.js', 'Firebase', 'Tailwind CSS', 'Socket.io'],
    difficulty: 'Intermediate',
    duration: '3-4 weeks',
    ideal: 'Final Year, B.Tech/MCA',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    icon: Calendar,
    title: 'Task & Project Management App',
    description: 'Collaborative tool for team project and task management',
    longDescription: 'A comprehensive project management application with task assignment, deadlines, team collaboration, progress tracking, and real-time updates for efficient team coordination.',
    features: [
      'Create projects and tasks',
      'Assign tasks to team members',
      'Set deadlines and priorities',
      'Kanban board view',
      'Real-time collaboration',
      'File attachments',
      'Progress tracking and charts',
      'Email reminders',
    ],
    tech: ['MERN Stack', 'Socket.io', 'Redux', 'Material-UI'],
    difficulty: 'Advanced',
    duration: '4-5 weeks',
    ideal: 'Final Year, B.Tech/MCA',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    icon: Video,
    title: 'Online Learning Management System',
    description: 'Complete LMS platform for online education',
    longDescription: 'A feature-rich learning management system with video lectures, quizzes, assignments, progress tracking, certificates, and instructor-student interaction capabilities.',
    features: [
      'Course creation and management',
      'Video lecture upload and streaming',
      'Quiz and assignment system',
      'Student progress tracking',
      'Discussion forums',
      'Certificate generation',
      'Payment integration for courses',
      'Analytics dashboard',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'Cloudinary'],
    difficulty: 'Advanced',
    duration: '5-6 weeks',
    ideal: 'Final Year, M.Tech/MCA',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 6,
    icon: Globe,
    title: 'Weather Dashboard Application',
    description: 'Weather forecasting app with location services',
    longDescription: 'A weather application that provides current weather, 7-day forecasts, weather alerts, location-based services, and interactive weather maps using third-party APIs.',
    features: [
      'Current weather display',
      '7-day weather forecast',
      'Location-based weather',
      'Search by city/zip code',
      'Weather maps and radar',
      'Air quality index',
      'UV index and alerts',
      'Weather charts and graphs',
    ],
    tech: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation API'],
    difficulty: 'Beginner',
    duration: '2 weeks',
    ideal: '2nd/3rd Year, Any Branch',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 7,
    icon: Laptop,
    title: 'Online Resume Builder',
    description: 'Professional resume creator with multiple templates',
    longDescription: 'An application that helps users create professional resumes by choosing from multiple templates, adding sections, and downloading in PDF format.',
    features: [
      'Multiple resume templates',
      'Drag-and-drop sections',
      'Real-time preview',
      'PDF export functionality',
      'Save and edit resumes',
      'Pre-filled examples',
      'Professional formatting',
      'Print-ready output',
    ],
    tech: ['React', 'jsPDF', 'Redux', 'CSS3'],
    difficulty: 'Beginner',
    duration: '1-2 weeks',
    ideal: '2nd/3rd Year, Any Branch',
    color: 'from-teal-500 to-green-500',
  },
  {
    id: 8,
    icon: Database,
    title: 'Hospital Management System',
    description: 'Complete healthcare management solution',
    longDescription: 'A comprehensive hospital management system handling patient records, appointments, doctor schedules, billing, inventory, and reporting for efficient healthcare operations.',
    features: [
      'Patient registration and records',
      'Doctor and staff management',
      'Appointment scheduling',
      'Billing and invoicing',
      'Medicine inventory management',
      'Lab test reports',
      'Bed allocation system',
      'Comprehensive reporting',
    ],
    tech: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Bootstrap'],
    difficulty: 'Advanced',
    duration: '5-6 weeks',
    ideal: 'Final Year, B.Tech/MCA',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 9,
    icon: BookOpen,
    title: 'Library Management System',
    description: 'Digital library system for book management',
    longDescription: 'A complete library management solution with book cataloging, member management, issue/return tracking, fine calculation, and comprehensive reporting features.',
    features: [
      'Book catalog with search',
      'Member registration',
      'Issue and return tracking',
      'Fine calculation system',
      'Book reservation',
      'Overdue notifications',
      'Reports and analytics',
      'Admin dashboard',
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'jQuery'],
    difficulty: 'Intermediate',
    duration: '3 weeks',
    ideal: '3rd/Final Year, Any Branch',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 10,
    icon: Mail,
    title: 'Email Marketing Platform',
    description: 'Campaign management and email automation tool',
    longDescription: 'An email marketing platform for creating campaigns, managing subscriber lists, designing email templates, and tracking campaign performance with analytics.',
    features: [
      'Email template designer',
      'Subscriber list management',
      'Campaign scheduling',
      'Email automation workflows',
      'Performance analytics',
      'A/B testing',
      'Bounce and spam tracking',
      'Integration with SMTP services',
    ],
    tech: ['Node.js', 'React', 'MongoDB', 'SendGrid/Nodemailer', 'Chart.js'],
    difficulty: 'Advanced',
    duration: '4-5 weeks',
    ideal: 'Final Year, B.Tech/MCA',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    id: 11,
    icon: Smartphone,
    title: 'Food Delivery App (Web)',
    description: 'Restaurant and food ordering platform',
    longDescription: 'A food delivery web application with restaurant listings, menu browsing, cart management, order placement, real-time order tracking, and payment integration.',
    features: [
      'Restaurant listings with filters',
      'Menu browsing and search',
      'Shopping cart functionality',
      'Order placement system',
      'Real-time order tracking',
      'Payment gateway integration',
      'Rating and reviews',
      'Order history',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Maps API'],
    difficulty: 'Intermediate',
    duration: '3-4 weeks',
    ideal: 'Final Year, B.Tech/BCA/MCA',
    color: 'from-orange-600 to-red-600',
  },
  {
    id: 12,
    icon: Award,
    title: 'Quiz & Examination System',
    description: 'Online quiz and exam conducting platform',
    longDescription: 'An online examination system for creating quizzes, conducting timed tests, automatic grading, result generation, and performance analytics for educational purposes.',
    features: [
      'Create quizzes with various question types',
      'Timed examination mode',
      'Automatic grading system',
      'Result generation with analysis',
      'Question bank management',
      'Random question selection',
      'Anti-cheating measures',
      'Performance reports',
    ],
    tech: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'Chart.js'],
    difficulty: 'Intermediate',
    duration: '3 weeks',
    ideal: '3rd/Final Year, Any Branch',
    color: 'from-violet-500 to-purple-500',
  },
]

const services = [
  {
    icon: Code,
    title: 'Project Development Guidance',
    description: 'Learn project development through reference implementations, code walkthroughs, and step-by-step mentorship.',
  },
  {
    icon: FileText,
    title: 'Documentation Training',
    description: 'Learn to create professional reports with sample templates and guidance (IEEE, ACM formats).',
    details: [
      'Abstract and Synopsis Writing',
      'Literature Review Methods',
      'System Design (DFD, ER Diagram, UML)',
      'Implementation Documentation',
      'Testing Methodology',
      'Conclusion Techniques',
      'Proper Citation & References',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Project Consultation & Mentorship',
    description: 'One-on-one guidance on project selection, technology choices, architecture design, and best practices.',
  },
  {
    icon: MessageCircle,
    title: 'Technical Support & Learning',
    description: 'Understand concepts through debugging sessions, code explanations, and hands-on learning support.',
  },
]

export default function StudentsPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-purple-600 to-indigo-700">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          
          <div className="container mx-auto px-6 relative z-10 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                <GraduationCap className="w-5 h-5" />
                <span className="text-sm font-semibold">Student Learning & Guidance Services</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Learn Through Professional Project Development
              </h1>
              
              <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto">
                Expert Guidance & Mentorship for Your Academic Projects
              </p>
              
              <p className="text-lg text-white/90 mb-4 max-w-3xl mx-auto font-semibold">
                We guide you through project development, help you understand concepts, and provide reference implementations for learning purposes - ensuring you understand every aspect of your project!
              </p>

              <div className="inline-flex flex-col gap-3 bg-white/20 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/30">
                <div className="flex items-center justify-center gap-3 text-2xl font-bold">
                  <span className="text-yellow-300">Starting at just ₹1,999*</span>
                </div>
                <div className="text-sm text-white/80">
                  *Basic projects | Advanced projects priced based on complexity
                </div>
                <div className="flex items-center justify-center gap-2 text-lg font-semibold mt-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-green-300">Delivery in 2-3 Days</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="#projects" size="lg" className="bg-white text-primary-600 hover:bg-slate-100">
                  <Code className="w-5 h-5 mr-2" />
                  Browse Projects
                </Button>
                <Button href="/contact" size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Help Now
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Floating Icons Animation */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-20 left-10 opacity-20"
          >
            <Code className="w-16 h-16 text-white" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-20 right-10 opacity-20"
          >
            <GraduationCap className="w-20 h-20 text-white" />
          </motion.div>
        </section>

        {/* Educational Ethics Notice */}
        <Section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900">
          <Card className="border-2 border-blue-500/30 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Learning-Focused Educational Service</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                We are committed to promoting academic integrity and genuine learning
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl p-6 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">1</div>
                  <h3 className="font-bold text-lg">Reference & Learning</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  We provide reference implementations and examples to help you <strong>understand concepts</strong> and learn best practices in software development.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">2</div>
                  <h3 className="font-bold text-lg">Mentorship & Guidance</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  One-on-one technical mentorship where we explain concepts, answer questions, and help you <strong>learn by understanding</strong> rather than just copying.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">3</div>
                  <h3 className="font-bold text-lg">Your Responsibility</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Students must <strong>understand, customize, and explain</strong> all work. Use our materials as study aids to enhance your own learning and skills.
                </p>
              </div>
            </div>

            <div className="mt-6 p-5 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-900 dark:text-yellow-400 mb-2">Our Educational Philosophy</h4>
                  <p className="text-sm text-yellow-800 dark:text-yellow-300 leading-relaxed">
                    We believe in empowering students through education. Our goal is to help you <strong>learn valuable skills</strong>, understand technical concepts deeply, and build confidence in your abilities. All materials should be used ethically as learning resources to develop your own understanding and expertise.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </Section>

        {/* Services Overview */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Help You Learn</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-2">
              Comprehensive mentorship and reference materials for your academic projects
            </p>
            <p className="text-base font-semibold text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
              Learn through examples, understand concepts, and create projects you can confidently present!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="h-full text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 text-white mx-auto mb-4"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {service.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Documentation Details */}
          <Card className="glass-card p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-8 h-8 text-primary-500" />
                  <h3 className="text-2xl font-bold">Learn Professional Documentation</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Receive sample documentation and templates showing industry-standard formats. Learn how to structure reports, create technical diagrams, and present your work professionally.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {services[1].details?.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </Section>

        {/* Detailed Projects Section */}
        <Section className="bg-slate-50 dark:bg-slate-900/50" id="projects">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Learning Project Topics</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Comprehensive project ideas with reference implementations to learn from. Perfect for understanding real-world application development.
            </p>
          </div>

          <div className="space-y-8">
            {detailedProjects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Project Header */}
                      <div className="lg:col-span-3 flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                        <div className="flex items-start gap-4">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} text-white`}
                          >
                            <Icon className="w-8 h-8" />
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{project.description}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                            project.difficulty === 'Beginner' 
                              ? 'bg-green-500/20 text-green-600 border border-green-500/30'
                              : project.difficulty === 'Intermediate'
                              ? 'bg-yellow-500/20 text-yellow-600 border border-yellow-500/30'
                              : 'bg-red-500/20 text-red-600 border border-red-500/30'
                          }`}>
                            {project.difficulty}
                          </span>
                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-600 border border-blue-500/30">
                            <Clock className="w-3 h-3 inline mr-1" />
                            {project.duration}
                          </span>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="lg:col-span-2">
                        <h4 className="font-bold mb-2">About This Project</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                          {project.longDescription}
                        </p>

                        <h4 className="font-bold mb-2">Key Features</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {project.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack & Details */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold mb-2">Technology Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800">
                          <div className="text-sm space-y-2">
                            <div className="flex justify-between">
                              <span className="text-slate-600 dark:text-slate-400">Ideal For:</span>
                              <span className="font-semibold">{project.ideal}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600 dark:text-slate-400">Duration:</span>
                              <span className="font-semibold">{project.duration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600 dark:text-slate-400">Level:</span>
                              <span className="font-semibold">{project.difficulty}</span>
                            </div>
                          </div>
                        </div>

                        <Button href="/contact" className="w-full" size="sm">
                          Get This Project
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </Section>

        {/* What You Get */}
        <Section>
          <div className="glass-card p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Package Includes</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Everything you need to successfully submit and present your project
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Code, label: 'Source Code', desc: 'Clean, commented code' },
                { icon: FileText, label: 'Project Report', desc: 'College-formatted documentation' },
                { icon: Laptop, label: 'PPT Presentation', desc: 'Professional slides' },
                { icon: Database, label: 'Database', desc: 'Schema and setup files' },
                { icon: BookOpen, label: 'User Manual', desc: 'Installation guide' },
                { icon: FileText, label: 'Abstract', desc: 'Synopsis and abstract' },
                { icon: CheckCircle, label: 'Testing Report', desc: 'Test cases and results' },
                { icon: MessageCircle, label: 'Support', desc: 'Technical assistance' },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 text-white mb-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold mb-1">{item.label}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </Section>

        {/* Pricing & Trust Section */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Affordable & Trustworthy</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Quality projects at student-friendly prices with guaranteed satisfaction
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">₹1,999+</div>
                <div className="text-lg font-semibold mb-3">Starting Price</div>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                  <li>✓ Basic Projects</li>
                  <li>✓ Simple Applications</li>
                  <li>✓ Standard Features</li>
                  <li>✓ Complete Documentation</li>
                </ul>
              </Card>

              <Card className="text-center border-2 border-primary-500">
                <div className="bg-primary-500 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-2">Most Popular</div>
                <div className="text-4xl font-bold text-primary-600 mb-2">Custom</div>
                <div className="text-lg font-semibold mb-3">Based on Requirements</div>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                  <li>✓ Advanced Projects</li>
                  <li>✓ Multiple Features</li>
                  <li>✓ Database Integration</li>
                  <li>✓ Priority Support</li>
                </ul>
              </Card>

              <Card className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">2-3 Days</div>
                <div className="text-lg font-semibold mb-3">Fast Delivery</div>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                  <li>✓ Quick Turnaround</li>
                  <li>✓ On-Time Delivery</li>
                  <li>✓ Regular Updates</li>
                  <li>✓ Rush Available</li>
                </ul>
              </Card>
            </div>

            <Card className="glass-card p-8 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-3">Our Learning-First Approach</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Personalized Mentorship</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        One-on-one guidance tailored to your learning pace and project requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Reference Materials</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Complete reference code, sample documentation, templates, and learning resources
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Concept Understanding</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        We ensure you understand every aspect so you can confidently explain your project
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Step-by-Step Learning</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Learn the development process from planning to deployment with detailed explanations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Presentation Preparation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Help with understanding technical concepts and preparing for project demonstrations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Ongoing Support</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Continuous guidance to answer questions and clarify doubts throughout your project
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-gradient-to-br from-primary-600 via-purple-600 to-indigo-700 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GraduationCap className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Master Project Development with Expert Guidance!
              </h2>
              <p className="text-xl text-white/90 mb-4">
                Learn from professionals and gain real skills for your career
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Get personalized mentorship, reference implementations, and learn industry best practices. We help you understand concepts deeply so you can confidently present and explain your project!
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <Button href="/contact" size="lg" className="bg-white text-primary-600 hover:bg-slate-100">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Learning Today
                </Button>
              </div>
              
              {/* Educational Disclaimer */}
              <div className="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 text-left max-w-2xl mx-auto">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Our Educational Commitment
                </h3>
                <div className="space-y-2 text-sm text-white/90">
                  <p>✓ <strong>Learning-Focused:</strong> We provide reference materials and mentorship to help you learn and understand concepts</p>
                  <p>✓ <strong>Ethical Guidance:</strong> Students are expected to use our materials as learning resources and study aids</p>
                  <p>✓ <strong>Academic Integrity:</strong> All work should be used for educational purposes, with proper understanding and customization</p>
                  <p>✓ <strong>Your Responsibility:</strong> You must understand and be able to explain all aspects of your project</p>
                </div>
              </div>
              
              <div className="inline-flex flex-col gap-2 bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 mt-6">
                <p className="text-sm font-semibold text-yellow-300">
                  ⚡ Limited mentorship slots this month - Connect now!
                </p>
                <p className="text-xs text-white/80">
                  Starting at ₹1,999 • Fast 2-3 days delivery • Reference materials included
                </p>
              </div>
            </motion.div>
          </div>
        </Section>
      </main>
      <Footer />
      
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Student Project Learning & Mentorship Services',
            provider: {
              '@type': 'Organization',
              name: 'PerfactWorks',
            },
            description: 'Educational mentorship and guidance for students learning project development. Reference implementations, documentation training, and technical concept explanations for academic learning purposes.',
            offers: {
              '@type': 'Offer',
              description: 'Project mentorship with reference materials and learning support',
            },
          }),
        }}
      />
    </>
  )
}
