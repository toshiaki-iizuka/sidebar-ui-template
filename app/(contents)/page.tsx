import Image from "next/image";
import Link from "next/link";

import Content from "@/components/layouts/Content";
import PageLayout from "@/components/layouts/PageLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <PageLayout>
      <Content title="Home">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Home</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card className="rounded-lg border-none mt-6">
          <CardContent className="p-6">
            <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
              <div className="flex flex-col relative">
                <Image
                  src="/dashboard.png"
                  alt="dashboard Image"
                  width={500}
                  height={500}
                  priority
                />
                <div className="absolute -bottom-8 right-0">
                  <Link
                    href="https://www.freepik.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground"
                  >
                    Designed by Freepik
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Content>
    </PageLayout>
  );
};

export default Home;
