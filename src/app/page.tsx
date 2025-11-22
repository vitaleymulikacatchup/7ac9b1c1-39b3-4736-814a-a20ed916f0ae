"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Zap, Lightbulb, TrendingUp, DollarSign, Sparkles, Star, Crown, Heart, Shield, Mail, HelpCircle, Users, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="plain"
      cardStyle="layered-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="SaaS Platform"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Streamline Your Workflow with Intelligent Automation"
          description="Empower your team with smart tools designed for modern teams. Automate tasks, collaborate seamlessly, and scale effortlessly."
          tag="Enterprise SaaS"
          tagIcon={Zap}
          buttons={[
            { text: "Start Free Trial", href: "contact" },
            { text: "Watch Demo", href: "https://example.com" }
          ]}
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824868900-1f5c00lz.jpg", imageAlt: "SaaS Dashboard Interface" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824869685-80so7w26.jpg", imageAlt: "Cloud Computing Platform" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824870305-pbjc8h04.jpg", imageAlt: "Data Analytics Visualization" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          title="How It Works"
          description="Three simple steps to transform your workflow and boost team productivity"
          tag="Process"
          tagIcon={Lightbulb}
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Connect Your Tools",
              description: "Seamlessly integrate with 500+ apps your team already uses. Sync data instantly and eliminate manual work.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824871920-td7ce5af.jpg",
              imageAlt: "API Integration"
            },
            {
              id: 2,
              title: "Automate Workflows",
              description: "Build powerful automations without code. Create custom workflows that adapt to your business needs.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824871053-azgl1ri9.jpg",
              imageAlt: "Workflow Automation"
            },
            {
              id: 3,
              title: "Monitor & Optimize",
              description: "Get real-time insights into team performance. Track metrics, identify bottlenecks, and continuously improve.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824872735-pc6800na.jpg",
              imageAlt: "Security Protection"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Trusted by Leading Companies"
          description="Join thousands of teams who are already seeing results"
          tag="Impact"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          metrics={[
            { id: "1", icon: Users, title: "Active Users", value: "50,000+" },
            { id: "2", icon: Zap, title: "Automations", value: "1M+" },
            { id: "3", icon: TrendingUp, title: "Time Saved", value: "10M hrs" },
            { id: "4", icon: Globe, title: "Countries", value: "150+" }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your team. Scale as you grow."
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              badge: "Popular",
              badgeIcon: Sparkles,
              price: "$49/mo",
              subtitle: "Perfect for small teams",
              features: [
                "Up to 5 team members",
                "50 automations",
                "Basic integrations",
                "Email support"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$149/mo",
              subtitle: "Best for growing teams",
              features: [
                "Up to 25 team members",
                "Unlimited automations",
                "500+ integrations",
                "Priority support",
                "Advanced analytics"
              ]
            },
            {
              id: "enterprise",
              badge: "Custom",
              badgeIcon: Crown,
              price: "Custom",
              subtitle: "For large organizations",
              features: [
                "Unlimited team members",
                "Unlimited automations",
                "Custom integrations",
                "Dedicated support",
                "Advanced security",
                "SLA guarantee"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Users Are Saying"
          description="Real feedback from real teams using our platform"
          tag="Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              handle: "@sarahchen",
              testimonial: "This platform transformed how our team works. We automated 80% of our repetitive tasks and saved hours every week. Incredible value.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824873228-iud173qe.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "2",
              name: "Marcus Johnson",
              handle: "@mjohnson",
              testimonial: "The integrations are seamless and the UI is intuitive. Our entire team was productive within days. Best investment we made this year.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824873734-8ag8b1dp.jpg",
              imageAlt: "Marcus Johnson"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emmarod",
              testimonial: "Support team is amazing. They helped us customize workflows that exactly match our process. Highly recommend to any growing company.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824874431-1wfmzor4.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@davkim",
              testimonial: "Finally a SaaS that actually delivers on its promises. ROI was clear within the first month. Worth every penny and more.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824875185-tcorb6ph.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              name: "Lisa Zhang",
              handle: "@lisaz",
              testimonial: "The automation capabilities are unmatched. We integrated it with our entire stack and everything just works. Five stars without hesitation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824875730-mb6chzqu.jpg",
              imageAlt: "Lisa Zhang"
            },
            {
              id: "6",
              name: "James Wilson",
              handle: "@jameswil",
              testimonial: "Our productivity increased by 40% in the first quarter. The team loves the interface and the features keep evolving. Fantastic product.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824876236-fed5pjw3.jpg",
              imageAlt: "James Wilson"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join 5000+ companies using our platform to scale their operations"
          tag="Partners"
          tagIcon={Shield}
          textboxLayout="default"
          showCard={true}
          speed={40}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824877520-zi1ebbll.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824878577-gimhjoyg.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824879261-cohkwhsb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824879799-pylalhhx.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824880660-wvea0e4q.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824881657-1c7l7xj1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824882165-bnsbf2ga.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824882931-3xgfgmbo.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about our platform"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763824876997-fewe1e2s.jpg"
          imageAlt="Customer Support"
          mediaPosition="right"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What integrations do you support?",
              content: "We support over 500 integrations with popular tools like Slack, Salesforce, HubSpot, Asana, and more. If you don't see your tool, our API allows for custom integrations."
            },
            {
              id: "2",
              title: "Is there a free trial available?",
              content: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can cancel anytime."
            },
            {
              id: "3",
              title: "What security measures do you have?",
              content: "We use enterprise-grade encryption, SOC 2 Type II compliance, regular security audits, and GDPR compliance. Your data is always secure."
            },
            {
              id: "4",
              title: "Can I export my data?",
              content: "Absolutely. You can export all your data anytime in multiple formats including CSV, JSON, and direct API access. Your data belongs to you."
            },
            {
              id: "5",
              title: "What kind of support do you offer?",
              content: "We offer email support, live chat, detailed documentation, video tutorials, and dedicated account managers for enterprise plans."
            },
            {
              id: "6",
              title: "How does billing work?",
              content: "We bill monthly or annually (with 20% discount). You can change or cancel your plan anytime. Invoices are sent automatically."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated with Our Latest Features"
          description="Join 10,000+ teams who get weekly updates on new features, best practices, and industry insights delivered to your inbox."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="We respect your privacy. Unsubscribe anytime. No spam, we promise."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Security", href: "https://example.com/security" },
                { label: "Roadmap", href: "https://example.com/roadmap" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "https://example.com/about" },
                { label: "Blog", href: "https://example.com/blog" },
                { label: "Careers", href: "https://example.com/careers" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "https://example.com/privacy" },
                { label: "Terms of Service", href: "https://example.com/terms" },
                { label: "Cookie Policy", href: "https://example.com/cookies" },
                { label: "Status", href: "https://example.com/status" }
              ]
            }
          ]}
          copyrightText="© 2025 SaaS Platform. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}