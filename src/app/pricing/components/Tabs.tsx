"use client";

import Heading from "@/components/custom/reusables/Heading";
import Section from "@/components/custom/reusables/Section";
import { Button } from "@/components/custom/reusables/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingTabs() {
  return (
    <Section className=" mx-auto lg:py-20 md:py-5 py-5 md:pt-24 pt-24 lg:pt-32 font-secondary">
      <Heading text="Hire your Storefront Managers" />
      <Tabs defaultValue="tabi" className="w-full mx-auto  ">
        <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto mb-8 h-full font-primary">
          <TabsTrigger
            value="tabi"
            className="data-[state=active]:bg-primary-dark data-[state=active]:text-white font-semibold lg:h-[45px] h-[32px]  lg:text-[24px] text-md"
          >
            Tabi AI
          </TabsTrigger>
          <TabsTrigger
            value="clio"
            className="data-[state=active]:bg-[#E5DED3] data-[state=active]:text-black font-semibold lg:h-[45px] h-[32px]  lg:text-[24px] text-md  "
          >
            Clio AI
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tabi">
          <Card className="lg:w-1/2 mx-auto">
            <CardContent className="flex flex-col p-0">
              <div className="space-y-4 lg:px-6 lg:pt-6 px-4 pt-4  ">
                <h3 className="lg:text-[24px] text-lg font-semibold">
                  Simplify Data
                </h3>
                <p className="text-sm text-muted-foreground font-semibold">
                  Transform your data effortlessly with high-quality tools for
                  seamless uploads, experiments, and exports.
                </p>
                <div className="flex flex-col text-sm text-muted-foreground">
                  <span className="text-primary-dark font-semibold">
                    Process upto 200 rows of data with 100 Free Sprout Tokens
                  </span>
                  <span className="text-xs mt-2 mb-2 block">
                    *Sprout Tokens consumed based on data size and prompts used
                  </span>
                </div>
                <Link
                  href="https://calendly.com/meghav-columsprout"
                  target="_blank"
                >
                  <Button className="h-[38px] text-[18px] w-full bg-primary-dark font-semibold text-white hover:bg-black">
                    Try for Free
                  </Button>
                </Link>
              </div>
              <div className="space-y-4 bg-[#423EC7]/10 mt-4 lg:p-6 p-4">
                <h3 className="text-lg font-semibold">What&apos;s Included</h3>
                <ul className="space-y-2  text-black/70">
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-black" />
                    Directly upload Excel/CSV files
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-black" />
                    Integrate with XML data feed
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-black" />
                    High-quality prompt templates
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-black" />
                    20+ free experiments
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-black" />
                    One-click exports
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clio">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-0">
                <div className="">
                  <div className="space-y-4 lg:px-6 px-4 pt-4">
                    <h3 className="lg:text-[24px] text-lg font-semibold">
                      Enable Support
                    </h3>
                    <div className="space-y-2">
                      <h4 className="font-medium">STARTER</h4>
                      <p className="text-sm text-muted-foreground">
                        Handle customer conversations with tools for seamless
                        assistance and smooth operations.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="p-6 w-auto bg-[#E5DED3] hover:bg-black text-black hover:text-white lg:text-[18px] text-sm"
                    >
                      Request Pricing
                    </Button>
                  </div>
                  <div className="bg-[#E5DED3]/50 h-full mt-4">
                    <div className="space-y-4 lg:px-6 p-4 h-full">
                      <h4 className="font-medium ">What&apos;s Included</h4>
                      <ul className="space-y-2 text-black/70">
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4" />
                          Live Chat
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4" />
                          Comprehensive cases for support
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4" />
                          Unified inbox for back office
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4" />
                          AI-generated drafts for replies
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4" />
                          Automated escalations
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4" />
                          Key performance analytics
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4" />
                          Monitor last 30 days&apos; conversations
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4" />
                          Save 30+ days old conversations
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4" />
                          Up to 100 conversations/month
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4" />3 team seats
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0 h-full">
                <div className="">
                  <div className="space-y-4 lg:px-6 px-4 pt-4">
                    <h3 className="lg:text-[24px] text-lg font-semibold">
                      Scale Impact
                    </h3>
                    <div className="space-y-2">
                      <h4 className="font-medium">ADVANCED</h4>
                      <p className="text-sm text-muted-foreground">
                        Equip your store with a smart concierge that streamlines
                        journeys and drives engagement.
                      </p>
                    </div>
                    <Button className="p-6 w-auto bg-primary-dark lg:text-[18px] text-sm text-white hover:bg-black">
                      Request Pricing
                    </Button>
                  </div>
                  <div className="bg-primary-dark/10 h-full mt-4">
                    <div className="space-y-3 lg:px-6 p-4 h-full">
                      <h4 className="font-medium">What&apos;s Included</h4>
                      <p className="text-sm text-primary-dark font-semibold">
                        Everything in Basic, plus:
                      </p>
                      <ul className="space-y-2 text-black/70">
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-black" />
                          Catalog knowledge base integration
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-black" />
                          NLP product search & recommendations
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-black" />
                          Store navigation and FAQs
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-black" />
                          Returns and exchange knowledge base
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-black" />
                          Support for promotions & campaigns
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-black" />
                          Unlimited team seats
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-black" />
                          Dedicated account manager
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-black" />
                          Dedicated Slack Channel
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-black" />
                          SLA and premium support
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </Section>
  );
}
