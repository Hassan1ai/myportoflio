"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Palette, Layout, Smartphone, Video } from "lucide-react"
import Image from "next/image"

const designCategories = [
  {
    name: "UI/UX Designs",
    icon: Layout,
    color: "bg-blue-500",
  },
  {
    name: "Social Media",
    icon: Smartphone,
    color: "bg-pink-500",
  },
  {
    name: "Branding",
    icon: Palette,
    color: "bg-purple-500",
  },
  {
    name: "Video Edits",
    icon: Video,
    color: "bg-red-500",
  },
]

const designWorks = [
  {
    title: "Recyclonic Mobile App UI",
    category: "UI/UX Designs",
    tools: ["Figma", "Photoshop"],
    image: "/images/Screenshot 2025-06-03 233035.png",
    link: "https://www.figma.com/design/aX3dAinmYMhdQ2yvlTe39b/Recyclonic1?node-id=0-1&t=AHh9SNiRqvrzbDPG-1",
  },
  {
    title: "Social Media posts",
    category: "Social Media",
    tools: ["Photoshop", "Illustrator"],
    image: "/images/Blue and White Modern Hiring Team Facebook Post (2).png",
    link: "https://www.facebook.com/photo.php?fbid=665064979631402&set=pb.100083837165938.-2207520000&type=3",
  },
  {
    title: "Posts For Elsewedy School",
    category: "Branding",
    tools: ["Illustrator", "Photoshop"],
    image: "/images/& Partners (1).png",
    link: "https://www.behance.net/Hassanmohammedai",
  },
  {
    title: "Elsewedy Activity Video",
    category: "Video Edits",
    tools: ["Premiere Pro", "After Effects"],
    image: "/images/Screenshot 2025-06-03 234235.png",
    link: "https://www.facebook.com/100083837165938/videos/959065645896398",
  },
  {
    title: "Dashboard Interface",
    category: "UI/UX Designs",
    tools: ["Figma", "Principle"],
    image: "/images/Screenshot 2025-06-03 2346066.png",
    link: "https://www.figma.com/design/fGsQcwf1D07Vf1k2F9sxaJ/Untitled?node-id=0-1&t=fXAy4io8LVPpvZ71-1",
  },
 
]

export function DesignGallery() {
  return (
    <section id="design" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my creative side through various design projects and visual communications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {designCategories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.name}
            </Badge>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designWorks.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" asChild>
                      <a href={work.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{work.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{work.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {work.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.behance.net/Hassanmohammedai" target="_blank" rel="noopener noreferrer">
              View Full Portfolio on Behance
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
