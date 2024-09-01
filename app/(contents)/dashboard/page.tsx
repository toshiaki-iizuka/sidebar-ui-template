import Image from "next/image";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import Content from "@/components/layouts/Content";

const Dashboard = () => {
  return (
    <Content title="Dashboard">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
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
  );
};

export default Dashboard;
