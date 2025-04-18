import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Permella</h1>
        <p className="text-lg mb-6">Permanent Jewelry Revolution in Poland</p>
        <Card className="mb-6">
          <CardContent className="text-left space-y-4">
            <h2 className="text-2xl font-semibold">Welcome to Permella</h2>
            <p>
              The first professional platform in Poland dedicated entirely to <strong>permanent jewelry</strong>. We offer premium training, top-quality tools and materials, and a full business model designed for beauty professionals who want to expand their services and grow their income.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Professional Training Programs:</strong> Hands-on or online training, perfect for beginners and beauty pros.
              </li>
              <li>
                <strong>Starter Kits & Tools:</strong> Includes machines, gold filled and S925 chains, charms, pliers, and more.
              </li>
              <li>
                <strong>Premium Materials:</strong> Only hypoallergenic 14k gold filled and solid S925 silver. No steel or plating.
              </li>
              <li>
                <strong>Support for Beauty Professionals:</strong> Ideal for piercing studios, nail salons, lash & brow bars.
              </li>
              <li>
                <strong>Business Growth & Mentorship:</strong> Join our community of empowered women growing successful businesses.
              </li>
            </ul>
          </CardContent>
        </Card>
        <h3 className="text-xl font-semibold mb-2">Become one of the first in Poland to offer permanent jewelry.</h3>
        <p className="mb-6">Start now. Grow fast. Shine always.</p>
        <div className="space-y-2">
          <p>📧 faktury@sweetpain.eu</p>
          <p>📱 +48 531 907 100</p>
        </div>
        <Button className="mt-6 text-lg px-6 py-2">Contact Us</Button>
      </div>
    </div>
  );
}