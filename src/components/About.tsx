import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for culinary excellence and outstanding service",
    },
    {
      icon: Users,
      title: "Expert Chefs",
      description: "Our team of professional chefs with years of experience",
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "All ingredients sourced fresh daily from local markets",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description:
        "Every dish is prepared with passion and attention to detail",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 mb-4">
              About Delish
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Where Every Meal is a{" "}
              <span className="text-amber-600">Celebration</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Since 1998, Delish has been serving authentic cuisine that brings
              people together. Our commitment to quality ingredients,
              traditional cooking methods, and exceptional hospitality has made
              us a beloved destination for food lovers.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Learn More About Us
            </Button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Restaurant atmosphere"
                className="rounded-lg object-cover h-48 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Delicious food"
                className="rounded-lg object-cover h-64 w-full"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Chef cooking"
                className="rounded-lg object-cover h-64 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Restaurant dining"
                className="rounded-lg object-cover h-48 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
