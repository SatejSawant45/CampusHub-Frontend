"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Search, Filter, ArrowRight, Star } from "lucide-react"

const allEvents = [
  {
    id: 1,
    title: "AI/ML Workshop Series",
    description: "Learn machine learning fundamentals with hands-on projects and real-world applications.",
    date: "2024-03-15",
    time: "2:00 PM",
    location: "Tech Lab 101",
    category: "Workshop",
    difficulty: "Beginner",
    attendees: 45,
    maxAttendees: 60,
    price: "Free",
    featured: true,
    tags: ["AI", "Machine Learning", "Python"],
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
    difficulty: "All Levels",
    attendees: 120,
    maxAttendees: 150,
    price: "$10",
    featured: true,
    tags: ["Competition", "Coding", "Prizes"],
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
    difficulty: "Intermediate",
    attendees: 32,
    maxAttendees: 40,
    price: "Free",
    featured: false,
    tags: ["Web Dev", "React", "Node.js"],
    image: "/web-development-coding-bootcamp-modern-workspace.png",
  },
  {
    id: 4,
    title: "Cybersecurity Fundamentals",
    description: "Introduction to ethical hacking, network security, and digital forensics.",
    date: "2024-04-05",
    time: "1:00 PM",
    location: "Security Lab 301",
    category: "Workshop",
    difficulty: "Beginner",
    attendees: 28,
    maxAttendees: 35,
    price: "Free",
    featured: false,
    tags: ["Security", "Ethical Hacking", "Networks"],
    image: "/cybersecurity-workshop-ethical-hacking-lab.png",
  },
  {
    id: 5,
    title: "Mobile App Development with Flutter",
    description: "Build cross-platform mobile applications using Google's Flutter framework.",
    date: "2024-04-12",
    time: "3:00 PM",
    location: "Mobile Dev Lab 102",
    category: "Workshop",
    difficulty: "Intermediate",
    attendees: 22,
    maxAttendees: 30,
    price: "Free",
    featured: false,
    tags: ["Mobile", "Flutter", "Cross-platform"],
    image: "/flutter-mobile-app-development-workshop.png",
  },
  {
    id: 6,
    title: "Data Science with Python",
    description: "Explore data analysis, visualization, and machine learning using Python libraries.",
    date: "2024-04-18",
    time: "11:00 AM",
    location: "Data Lab 203",
    category: "Seminar",
    difficulty: "Intermediate",
    attendees: 38,
    maxAttendees: 50,
    price: "Free",
    featured: false,
    tags: ["Data Science", "Python", "Analytics"],
    image: "/data-science-python-workshop-analytics.png",
  },
  {
    id: 7,
    title: "Cloud Computing with AWS",
    description: "Learn cloud infrastructure, deployment strategies, and serverless computing.",
    date: "2024-04-25",
    time: "2:30 PM",
    location: "Cloud Lab 104",
    category: "Bootcamp",
    difficulty: "Advanced",
    attendees: 15,
    maxAttendees: 25,
    price: "$15",
    featured: false,
    tags: ["Cloud", "AWS", "DevOps"],
    image: "/aws-cloud-computing-workshop-infrastructure.png",
  },
  {
    id: 8,
    title: "UI/UX Design Workshop",
    description: "Master design principles, user research, and prototyping tools like Figma.",
    date: "2024-05-02",
    time: "10:30 AM",
    location: "Design Studio 201",
    category: "Workshop",
    difficulty: "Beginner",
    attendees: 41,
    maxAttendees: 45,
    price: "Free",
    featured: false,
    tags: ["Design", "UX", "Figma"],
    image: "/ui-ux-design-workshop-figma-prototyping.png",
  },
]

const categories = ["All", "Workshop", "Hackathon", "Bootcamp", "Seminar"]
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [activeTab, setActiveTab] = useState("all")

  const filteredEvents = useMemo(() => {
    let filtered = allEvents

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((event) => event.category === selectedCategory)
    }

    // Filter by difficulty
    if (selectedDifficulty !== "All") {
      filtered = filtered.filter((event) => event.difficulty === selectedDifficulty)
    }

    // Filter by tab
    if (activeTab === "featured") {
      filtered = filtered.filter((event) => event.featured)
    } else if (activeTab === "free") {
      filtered = filtered.filter((event) => event.price === "Free")
    }

    return filtered
  }, [searchTerm, selectedCategory, selectedDifficulty, activeTab])

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Upcoming Tech Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover workshops, hackathons, and seminars designed to enhance your technical skills and connect you with
            the tech community.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search events, topics, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty} value={difficulty}>
                      {difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
              <TabsTrigger value="all">All Events</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="free">Free Events</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Results Count */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredEvents.length} of {allEvents.length} events
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="secondary">{event.category}</Badge>
                    {event.featured && (
                      <Badge className="bg-yellow-500 text-yellow-50">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant={event.price === "Free" ? "default" : "destructive"}>{event.price}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-balance group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                  </div>
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
                    <Badge variant="outline">{event.difficulty}</Badge>
                  </div>

                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {event.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <Link href={`/events/${event.id}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">No events found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or browse all available events.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
                setSelectedDifficulty("All")
                setActiveTab("all")
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Load More Button (for future pagination) */}
        {filteredEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              Load More Events
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
