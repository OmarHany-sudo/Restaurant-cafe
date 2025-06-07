import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, Flame } from "lucide-react";

const MenuHighlights = () => {
  const menuCategories = {
    appetizers: [
      {
        name: "Truffle Arancini",
        description: "Crispy risotto balls with truffle oil and parmesan",
        price: "$14",
        image:
          "https://images.unsplash.com/photo-1572441713132-51c75654db73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        isPopular: true,
        isSpicy: false,
      },
      {
        name: "Burrata Caprese",
        description: "Fresh burrata with heirloom tomatoes and basil",
        price: "$16",
        image:
          "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        isPopular: false,
        isSpicy: false,
      },
      {
        name: "Spicy Tuna Tartare",
        description: "Fresh tuna with avocado, chili oil, and sesame",
        price: "$18",
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        isPopular: false,
        isSpicy: true,
      },
    ],
    mains: [
      {
        name: "Wagyu Ribeye",
        description: "Premium wagyu with roasted vegetables and red wine jus",
        price: "$65",
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        isPopular: true,
        isSpicy: false,
      },
      {
        name: "Lobster Risotto",
        description: "Creamy arborio rice with fresh lobster and saffron",
        price: "$42",
        image:
          "https://images.unsplash.com/photo-1563379091339-03246cea73e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        isPopular: true,
        isSpicy: false,
      },
      {
        name: "Duck Confit",
        description: "Slow-cooked duck leg with cherry sauce and potatoes",
        price: "$38",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        isPopular: false,
        isSpicy: false,
      },
    ],
    desserts: [
      {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with vanilla ice cream",
        price: "$12",
        image:
          "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        isPopular: true,
        isSpicy: false,
      },
      {
        name: "Tiramisu",
        description: "Classic Italian dessert with espresso and mascarpone",
        price: "$10",
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        isPopular: false,
        isSpicy: false,
      },
      {
        name: "Crème Brûlée",
        description: "Vanilla custard with caramelized sugar crust",
        price: "$11",
        image:
          "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        isPopular: false,
        isSpicy: false,
      },
    ],
  };

  const renderMenuItem = (item: any) => (
    <Card
      key={item.name}
      className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {item.isPopular && (
            <Badge className="bg-amber-500 hover:bg-amber-500 text-white">
              <Star className="h-3 w-3 mr-1" />
              Popular
            </Badge>
          )}
          {item.isSpicy && (
            <Badge variant="destructive">
              <Flame className="h-3 w-3 mr-1" />
              Spicy
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
          <span className="text-xl font-bold text-amber-600">{item.price}</span>
        </div>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>15-20 min</span>
          </div>
          <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
            Order Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 mb-4">
            Our Menu
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Culinary <span className="text-amber-600">Masterpieces</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated menu featuring fresh ingredients,
            bold flavors, and artistic presentation in every dish.
          </p>
        </div>

        {/* Menu Tabs */}
        <Tabs defaultValue="appetizers" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-100">
            <TabsTrigger value="appetizers" className="text-lg py-3">
              Appetizers
            </TabsTrigger>
            <TabsTrigger value="mains" className="text-lg py-3">
              Main Courses
            </TabsTrigger>
            <TabsTrigger value="desserts" className="text-lg py-3">
              Desserts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="appetizers">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuCategories.appetizers.map(renderMenuItem)}
            </div>
          </TabsContent>

          <TabsContent value="mains">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuCategories.mains.map(renderMenuItem)}
            </div>
          </TabsContent>

          <TabsContent value="desserts">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuCategories.desserts.map(renderMenuItem)}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
