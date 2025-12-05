import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  service: z.string({ required_error: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call as requested
    console.log("Form Submitted:", values);
    
    // Mock API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="py-20 md:py-28 container mx-auto px-4 md:px-6 bg-slate-50/50">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Contact Info */}
        <div>
          <SectionTitle subtitle="Have a question or ready to start your cloud journey? We're here to help.">
            Get in Touch
          </SectionTitle>
          
          <div className="space-y-8 mt-12">
            <div className="flex items-start gap-6">
              <div className="bg-white p-4 rounded-full shadow-sm border border-slate-100">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-slate-900">Email Us</h3>
                <p className="text-slate-500 mb-2 text-sm">For general inquiries and bookings:</p>
                <a href="mailto:hello@meghacloud.ca" className="text-primary font-bold text-lg hover:underline">hello@meghacloud.ca</a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-white p-4 rounded-full shadow-sm border border-slate-100">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-slate-900">Location</h3>
                <p className="text-slate-600 leading-relaxed">
                  Based in Ontario, Canada.<br />
                  Serving clients remotely across the province.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl mt-12 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Mail className="h-32 w-32" />
              </div>
              <h4 className="font-bold text-xl mb-3">Free Discovery Call</h4>
              <p className="text-slate-300 mb-6 leading-relaxed max-w-xs">
                Not sure what you need? Book a free 30-minute consultation to discuss your business goals.
              </p>
              <Button className="bg-white text-slate-900 hover:bg-slate-100 font-bold w-full sm:w-auto">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
          <h2 className="text-2xl font-bold mb-8 text-slate-900">Send a Message</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-medium">Name <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="h-11 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-medium">Email <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="you@company.com" {...field} className="h-11 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">Company Name (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Business Ltd." {...field} className="h-11 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">What are you looking for? <span className="text-red-500">*</span></FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-11 bg-slate-50 border-slate-200 focus:bg-white transition-colors">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="migration">Cloud Migration</SelectItem>
                        <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                        <SelectItem value="backup">Backup & Recovery</SelectItem>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">Message <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us a bit about your project or question..." 
                        className="min-h-[150px] bg-slate-50 border-slate-200 focus:bg-white transition-colors resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 text-lg shadow-md hover:shadow-lg transition-all mt-4" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
