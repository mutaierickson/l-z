import { Award, Users, Globe, Heart, CheckCircle, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const stats = [
    { label: "Years of Experience", value: "8+", icon: Award },
    { label: "Healthcare Partners", value: "500+", icon: Users },
    { label: "Counties Served", value: "47", icon: Globe },
    { label: "Products Available", value: "1000+", icon: TrendingUp }
  ]

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Everything we do is focused on improving patient outcomes and healthcare quality across Kenya."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "We maintain the highest standards through rigorous quality control and certified suppliers."
    },
    {
      icon: Users,
      title: "Professional Support",
      description: "Our expert team provides technical guidance and support to healthcare professionals."
    },
    {
      icon: Globe,
      title: "Nationwide Reach",
      description: "Serving all 47 counties in Kenya with reliable delivery and local support."
    }
  ]

  const team = [
    {
      name: "Dr. Leonard Mwangi",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop",
      bio: "Medical doctor with 15+ years in healthcare management and medical device industry."
    },
    {
      name: "Zara Ochieng",
      role: "Chief Operations Officer", 
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
      bio: "Supply chain expert specializing in medical equipment procurement and distribution."
    },
    {
      name: "Dr. Samuel Kiplagat",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop",
      bio: "Biomedical engineer ensuring product quality and technical support services."
    },
    {
      name: "Grace Wambui",
      role: "Customer Relations Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9c2b4ab?w=300&h=300&fit=crop",
      bio: "Healthcare professional dedicated to building lasting partnerships with clients."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-hero-gradient">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4">
            About L & Z Biotech Limited
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Committed to Healthcare Excellence
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
          L & Z Biotech Limited, based in Nairobi, Kenya, is 
          a leading provider of medical supplies and pharmaceuticals. 
          We enhance healthcare access across East Africa by offering high-quality, 
          affordable, and innovative products. Committed to customer satisfaction, integrity,
          and service excellence, we empower healthcare providers and support healthier communities.


          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-medical-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-card-gradient border-none">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  L & Z Biotech Limited was established in 2015 by Dr. Leonard Mwangi and Zara Ochieng, 
                  two healthcare professionals who recognized the critical need for reliable, high-quality 
                  medical supplies in Kenya's healthcare system.
                </p>
                <p>
                  Starting with a small warehouse in Nairobi, we began by serving local clinics and hospitals 
                  with essential medical equipment. Our commitment to quality, competitive pricing, and 
                  exceptional customer service quickly earned us the trust of healthcare professionals 
                  across the region.
                </p>
                <p>
                  Today, we serve over 500 healthcare facilities across all 47 counties in Kenya, 
                  maintaining our founding principles while continuously expanding our product range 
                  and improving our services. We are proud to play a vital role in improving healthcare 
                  outcomes for millions of Kenyans.
                </p>
                <p>
                  Our ISO 13485 certification and partnerships with leading international manufacturers 
                  ensure that every product we supply meets the highest standards of quality and safety.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                alt="Medical facility"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary">2015</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These values guide every decision we make and every service we provide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-card-gradient border-none">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced healthcare professionals dedicated to improving medical care in Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-medical-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 text-white">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-white/90">
                Our mission is to ensure our clients are happy with our excellent services 
                and the quality of our goods. 
              </p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-white/90">
                Collaborating with Health Care Providers to positively impact Public Health,
                Safety and Wellness. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}