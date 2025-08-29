"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, ArrowRight, Code, Zap, Trophy, BookOpen } from "lucide-react"

const featuredEvents = [
  {
    id: 1,
    title: "AI/ML Workshop Series",
    description: "Learn machine learning fundamentals with hands-on projects and real-world applications.",
    date: "2024-03-15",
    time: "2:00 PM",
    location: "Tech Lab 101",
    category: "Workshop",
    attendees: 45,
    maxAttendees: 60,
    image: "/ai-machine-learning-workshop-students-coding.png",
  },
  {
    id: 2,
    title: "Spring Hackathon 2024",
    description: "48-hour coding challenge with amazing prizes and networking opportunities.",
    date: "2024-03-22",
    time: "6:00 PM",
    location: "Student Center",
    category: "Hackathon",
    attendees: 120,
    maxAttendees: 150,
    image: "/hackathon-coding-competition-students-laptops.png",
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    description: "Master modern web technologies including React, Node.js, and cloud deployment.",
    date: "2024-03-28",
    time: "10:00 AM",
    location: "Computer Lab 205",
    category: "Bootcamp",
    attendees: 32,
    maxAttendees: 40,
    image: "/web-development-coding-bootcamp-modern-workspace.png",
  },
]

const quickStats = [
  { icon: Calendar, label: "Events This Month", value: "24" },
  { icon: Users, label: "Active Members", value: "1,200+" },
  { icon: Code, label: "Tech Clubs", value: "15" },
  { icon: Trophy, label: "Competitions Won", value: "8" },
]

const clubCategories = [
  {
    name: "Programming",
    description: "Coding clubs and competitive programming",
    icon: Code,
    count: 5,
    color: "bg-blue-500",
  },
  {
    name: "AI & Data Science",
    description: "Machine learning and data analysis groups",
    icon: Zap,
    count: 3,
    color: "bg-purple-500",
  },
  {
    name: "Web Development",
    description: "Frontend and backend development communities",
    icon: BookOpen,
    count: 4,
    color: "bg-green-500",
  },
  {
    name: "Cybersecurity",
    description: "Information security and ethical hacking",
    icon: Trophy,
    count: 3,
    color: "bg-red-500",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-primary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <Badge variant="secondary" className="mb-4">
                    🚀 New Events Added Weekly
                  </Badge>
                </motion.div>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Discover Amazing <span className="text-primary">Tech Events</span> at Your College
                </h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                  Join workshops, hackathons, and tech talks. Connect with like-minded students and build your skills in
                  the latest technologies.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="/events">
                    Browse Events <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                  <Link href="/clubs">Explore Clubs</Link>
                </Button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
              >
                {quickStats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/modern-college-tech-event-students-coding-collabor.png"
                  alt="Students collaborating on tech projects"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Featured Events This Month</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Don't miss out on these exciting opportunities to learn, network, and grow your technical skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <Badge className="absolute top-4 left-4" variant="secondary">
                      {event.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-balance">{event.title}</CardTitle>
                    <CardDescription className="text-pretty">{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>
                          {event.attendees}/{event.maxAttendees} registered
                        </span>
                      </div>
                      <div className="w-24 bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href={`/events/${event.id}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" asChild>
              <Link href="/events">
                View All Events <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Clubs & Societies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Join Our Tech Communities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Connect with passionate students, work on exciting projects, and build lasting friendships in our diverse
              tech clubs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-balance">{category.name}</CardTitle>
                    <CardDescription className="text-pretty">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">{category.count}</div>
                    <div className="text-sm text-muted-foreground">Active Clubs</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" asChild>
              <Link href="/clubs">
                Explore All Clubs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Start Your Tech Journey?</h2>
            <p className="text-xl opacity-90 text-pretty">
              Join thousands of students who are already building their future through our events and communities. Your
              next breakthrough is just one event away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link href="/events">Register for Events</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/registrations">View My Registrations</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
