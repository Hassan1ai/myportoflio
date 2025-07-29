"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Code, Recycle } from "lucide-react"
import Image from "next/image"

const volunteeringActivities = [
  {
    title: "Electronic Waste Awareness Campaigns",
    description:
      "Organized and participated in community campaigns to raise awareness about proper e-waste disposal and recycling practices.",
    icon: Recycle,
    impact: "Reached 500+ community members",
    image: "/images/AdobeStock_500968458.jpeg",
  },
  {
    title: "React.js & JavaScript Workshops",
    description:
      "Conducted technical workshops for fellow students, sharing knowledge about modern web development technologies.",
    icon: Code,
    impact: "Trained 50+ students",
    image: "/images/Screenshot 2025-07-29 071001.png",
  },
  {
    title: "Peer Coding Support",
    description: "Provided mentorship and coding support to junior students learning programming fundamentals.",
    icon: Users,
    impact: "Mentored 20+ students",
    image: "/images/Untitled design.png",
  },
  {
    title: "Volunteer Organizer – Youth Knowledge Forum (4th Edition)",
    description: "Assisted in organizing the 4th Youth Knowledge Forum (2025), supporting VIP coordination and event logistics for 2,000+ attendees.",
    icon: Users,
    impact: "Handled logistics for a high-profile event with 2,000+ participants.",
    image: "/images/profill.jpg",
  },
  {
    title: "Educational Visit – Higher Institute of Engineering",
    description: "Visited the Mechatronics Department to explore student projects, exchange knowledge with peers and faculty, and gain insights into various engineering disciplines.",
    icon: Users,
    impact: "Participated in a technical visit to the Higher Institute of Engineering and gained insights into cross-disciplinary innovation.",
    image: "/images/1748070863700.jpeg",
  },
]

export function VolunteeringSection() {
  return (
    <section id="volunteering" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Volunteering & Workshops</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Giving back to the community through knowledge sharing and environmental awareness
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {volunteeringActivities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary p-2 rounded-full">
                      <activity.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{activity.description}</p>
                  <div className="flex items-center space-x-2 text-sm font-semibold text-primary">
                    <Heart className="h-4 w-4" />
                    <span>{activity.impact}</span>
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
          className="mt-16 text-center"
        >
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <Heart className="h-6 w-6 mr-2 text-red-500" />
                Community Impact
              </h3>
              <p className="text-muted-foreground text-lg">
                I believe in the power of knowledge sharing and community service. Through my volunteering efforts, I've
                been able to combine my passion for technology and environmental sustainability to make a positive
                impact in my community.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
