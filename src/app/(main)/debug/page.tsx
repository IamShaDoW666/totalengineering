import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { api, HydrateClient } from "@/trpc/server";
import { faker } from "@faker-js/faker";

export default async function Debug() {
  const products = await api.product.getAll();
  void api.product.getAll.prefetch();
  return (
    <HydrateClient>
      <div className="container mx-auto mt-24 text-foreground">
        <div className="grid grid-cols-4 gap-8 py-8">
          {products.map((product) => {
            const color = faker.color.rgb()
            return (
                <Card className={`shadow-lg dark:shadow-white/20`} key={product.id}>
                  <CardHeader className="gap-y-8">
                    <CardTitle>{product.name}</CardTitle>
                    <Badge className="self-end" style={{backgroundColor: color}}>{product.category?.name}</Badge>
                    <Separator />
                  </CardHeader>
                  <CardContent>{product.description}</CardContent>
                </Card>
              )
          })}
        </div>
      </div>
    </HydrateClient>
  );
}
