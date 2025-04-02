import {
  BarChart3,
  Bell,
  CreditCard,
  FileSpreadsheet,
  Image,
  MessageSquare,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { Link, NavLink, useNavigate } from "react-router-dom"

export default function LandingPage() {
  const [cookies] = useCookies()
  const navigate = useNavigate()

  useEffect(() => {
    if (cookies?.userData?._id) {
      navigate("/dashboard")
    }
  }, [cookies, navigate])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full  bg-black pl-5 pr-5">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-white">MoneyMate</span>
          </div>
          <nav className="hidden md:flex gap-6 text-white">
            <Link href="#features" className="text-sm font-medium text-blue-100 hover:text-blue-300 transition-colors">
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-blue-100 hover:text-blue-300 transition-colors"
            >
              How It Works
            </Link>
            <Link href="#premium" className="text-sm font-medium text-blue-100 hover:text-blue-300 transition-colors">
              Premium
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-blue-100 hover:text-blue-300 transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-100 hover:bg-blue-900/30 hover:text-blue-300"
              asChild
            >
              <Link to="/login">Log in</Link>
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-black to-blue-950 p-5">
          <div className="container flex flex-col items-center text-center">
            <div className="inline-flex items-center rounded-lg bg-blue-900/20 px-3 py-1 text-sm text-blue-300 mb-6">
              <Sparkles className="mr-1 h-4 w-4" />
              <span>Smart expense tracking for modern life</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Take Control of Your <span className="text-blue-400">Finances</span>
            </h1>
            <p className="max-w-[42rem] text-lg text-blue-100/80 mb-8">
              Track expenses, manage subscriptions, and get personalized financial insights with our AI-powered
              platform. Save more, spend smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md ">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 md:flex-1 text-white">
               <Link to="/signup">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-700 text-blue-300 hover:bg-blue-900/20 md:flex-1 ">
                See Demo
              </Button>
            </div>
          </div>
        </section>
        <section id="features" className="py-20 bg-black">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Powerful Features</h2>
              <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
                Everything you need to manage your finances in one place
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-7">
              <Card className="bg-blue-950/40 border-blue-900 shadow-lg">
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle className="text-white">Detailed Insights</CardTitle>
                  <CardDescription className="text-blue-200/70">Visualize your spending patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100/80">
                    Get detailed insights into your spending patterns with beautiful charts and reports. Understand
                    where your money goes.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-blue-950/40 border-blue-900 shadow-lg">
                <CardHeader>
                  <MessageSquare className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle className="text-white">AI Assistant</CardTitle>
                  <CardDescription className="text-blue-200/70">Your personal financial advisor</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100/80">
                    Chat with our AI to quickly add expenses and get personalized financial advice tailored to your
                    spending habits.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-blue-950/40 border-blue-900 shadow-lg">
                <CardHeader>
                  <Zap className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle className="text-white">Real-time Updates</CardTitle>
                  <CardDescription className="text-blue-200/70">Always stay in the loop</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100/80">
                    Add expenses on the go and see your spending updates in real time. Never lose track of your finances
                    again.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-blue-950/40 border-blue-900 shadow-lg">
                <CardHeader>
                  <CreditCard className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle className="text-white">Subscription Management</CardTitle>
                  <CardDescription className="text-blue-200/70">Track all your recurring expenses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100/80">
                    Manage all your subscriptions in one place. Get a clear overview of your recurring expenses and
                    avoid unwanted charges.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-blue-950/40 border-blue-900 shadow-lg">
                <CardHeader>
                  <Bell className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle className="text-white">Smart Notifications</CardTitle>
                  <CardDescription className="text-blue-200/70">Never miss a payment</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100/80">
                    Receive email notifications 3 days before subscription renewals. Stay on top of your finances with
                    timely reminders.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 6 */}
              <Card className="bg-blue-950/40 border-blue-900 shadow-lg">
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle className="text-white">Comprehensive Dashboard</CardTitle>
                  <CardDescription className="text-blue-200/70">Your financial command center</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100/80">
                    Access all your financial data from a single, intuitive dashboard. Get a complete overview of your
                    financial health.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-black to-blue-950 p-6">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How It Works</h2>
              <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
                Getting started with MoneyMate is quick and easy
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Sign Up</h3>
                <p className="text-blue-100/80">
                  Create your free account in seconds and connect your bank accounts securely.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Track Expenses</h3>
                <p className="text-blue-100/80">
                  Add expenses manually or let our AI automatically categorize your transactions.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Get Insights</h3>
                <p className="text-blue-100/80">
                  Receive personalized insights and recommendations to improve your financial health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features Section */}
        <section id="premium" className="py-20 bg-blue-950">
          <div className="container p-7">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-lg bg-blue-900/40 px-3 py-1 text-sm text-blue-300 mb-4">
                <Sparkles className="mr-1 h-4 w-4" />
                <span>Premium Features</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Unlock More Power</h2>
              <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
                Take your financial management to the next level with our premium features
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Premium Feature 1 */}
              <Card className="bg-black/40 border-blue-800 shadow-lg">
                <CardHeader>
                  <Smartphone className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle className="text-white">WhatsApp Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100/80">
                    Add expenses and get updates directly through WhatsApp. Track your finances without even opening the
                    app.
                  </p>
                </CardContent>
              </Card>

              {/* Premium Feature 2 */}
              <Card className="bg-black/40 border-blue-800 shadow-lg">
                <CardHeader>
                  <FileSpreadsheet className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle className="text-white">CSV File Upload</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100/80">
                    Import your transaction history from any bank or financial institution with our easy CSV upload
                    feature.
                  </p>
                </CardContent>
              </Card>

              {/* Premium Feature 3 */}
              <Card className="bg-black/40 border-blue-800 shadow-lg">
                <CardHeader>
                  <Image className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle className="text-white">Receipt Image Upload</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100/80">
                    Snap a photo of your receipts and our AI will automatically extract and categorize the expense
                    details.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-black">
          <div className="container p-7">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Users Say</h2>
              <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
                Join thousands of satisfied users who have transformed their financial lives
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="bg-blue-950/20 border-blue-900/50 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-blue-900/50 w-12 h-12 flex items-center justify-center">
                      <span className="text-blue-300 font-bold">JD</span>
                    </div>
                    <div>
                      <CardTitle className="text-white">John Doe</CardTitle>
                      <CardDescription className="text-blue-300/70">Freelancer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100/80">
                    "MoneyMate has completely changed how I manage my finances. The AI suggestions have helped me save
                    over $200 per month!"
                  </p>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="bg-blue-950/20 border-blue-900/50 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-blue-900/50 w-12 h-12 flex items-center justify-center">
                      <span className="text-blue-300 font-bold">JS</span>
                    </div>
                    <div>
                      <CardTitle className="text-white">Jane Smith</CardTitle>
                      <CardDescription className="text-blue-300/70">Small Business Owner</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100/80">
                    "The subscription management feature alone is worth the price. I discovered I was paying for
                    services I'd forgotten about!"
                  </p>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="bg-blue-950/20 border-blue-900/50 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-blue-900/50 w-12 h-12 flex items-center justify-center">
                      <span className="text-blue-300 font-bold">MJ</span>
                    </div>
                    <div>
                      <CardTitle className="text-white">Mike Johnson</CardTitle>
                      <CardDescription className="text-blue-300/70">Software Engineer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100/80">
                    "The charts and visualizations make it so easy to understand my spending habits. I've never been
                    more aware of my finances."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gradient-to-b from-blue-950 to-black">
          <div className="container p-7">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Simple, Transparent Pricing</h2>
              <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">Choose the plan that works best for you</p>
            </div>
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="monthly" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly (Save 20%)</TabsTrigger>
                </TabsList>
                <TabsContent value="monthly">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Free Plan */}
                    <Card className="bg-blue-950/20 border-blue-900/50 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-white">Free</CardTitle>
                        <div className="mt-4 flex items-baseline text-white">
                          <span className="text-4xl font-extrabold tracking-tight">$0</span>
                          <span className="ml-1 text-xl font-semibold">/month</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="mt-6 space-y-4">
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">Expense tracking</span>
                          </li>
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">Basic reports</span>
                          </li>
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">Up to 50 transactions/month</span>
                          </li>
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">Email support</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          <Link to="/signup">Get Started</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Premium Plan */}
                    <Card className="bg-blue-900/30 border-blue-600/50 shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        POPULAR
                      </div>
                      <CardHeader>
                        <CardTitle className="text-white">Premium</CardTitle>
                        <div className="mt-4 flex items-baseline text-white">
                          <span className="text-4xl font-extrabold tracking-tight">$9.99</span>
                          <span className="ml-1 text-xl font-semibold">/month</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="mt-6 space-y-4">
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">Everything in Free</span>
                          </li>
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">Unlimited transactions</span>
                          </li>
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">Advanced AI insights</span>
                          </li>
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">WhatsApp integration</span>
                          </li>
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">CSV & receipt uploads</span>
                          </li>
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">Priority support</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          <Link to="/signup">Get Premium</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="yearly">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Free Plan */}
                    <Card className="bg-blue-950/20 border-blue-900/50 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-white">Free</CardTitle>
                        <div className="mt-4 flex items-baseline text-white">
                          <span className="text-4xl font-extrabold tracking-tight">$0</span>
                          <span className="ml-1 text-xl font-semibold">/year</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="mt-6 space-y-4">
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">Expense tracking</span>
                          </li>
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">Basic reports</span>
                          </li>
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">Up to 50 transactions/month</span>
                          </li>
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">Email support</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          <Link to='/signup'>Get Started</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Premium Plan */}
                    <Card className="bg-blue-900/30 border-blue-600/50 shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        POPULAR
                      </div>
                      <CardHeader>
                        <CardTitle className="text-white">Premium</CardTitle>
                        <div className="mt-4 flex items-baseline text-white">
                          <span className="text-4xl font-extrabold tracking-tight">$95.88</span>
                          <span className="ml-1 text-xl font-semibold">/year</span>
                        </div>
                        <p className="text-blue-300 mt-2 text-sm">Save $23.88 compared to monthly</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="mt-6 space-y-4">
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">Everything in Free</span>
                          </li>
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">Unlimited transactions</span>
                          </li>
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">Advanced AI insights</span>
                          </li>
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">WhatsApp integration</span>
                          </li>
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">CSV & receipt uploads</span>
                          </li>
                          <li className="flex gap-2">
                            <svg
                              className="h-5 w-5 flex-shrink-0 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-blue-100/80">Priority support</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Premium</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="container p-7">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
              <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">Got questions? We've got answers</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <Card className="bg-blue-950/20 border-blue-900/50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-white">How secure is my financial data?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100/80">
                      Your data is encrypted using bank-level security protocols. We use 256-bit encryption and never
                      store your bank credentials. We're also compliant with all relevant data protection regulations.
                    </p>
                  </CardContent>
                </Card>

                {/* FAQ Item 2 */}
                <Card className="bg-blue-950/20 border-blue-900/50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-white">Can I export my data?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100/80">
                      Yes, you can export your data in various formats including CSV and PDF. This makes it easy to use
                      your data in other applications or for tax purposes.
                    </p>
                  </CardContent>
                </Card>

                {/* FAQ Item 3 */}
                <Card className="bg-blue-950/20 border-blue-900/50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-white">How does the AI assistant work?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100/80">
                      Our AI assistant analyzes your spending patterns and financial habits to provide personalized
                      advice. It can help you identify areas where you can save money, suggest budget adjustments, and
                      answer your financial questions.
                    </p>
                  </CardContent>
                </Card>

                {/* FAQ Item 4 */}
                <Card className="bg-blue-950/20 border-blue-900/50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-white">Can I cancel my subscription anytime?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100/80">
                      Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access
                      to premium features until the end of your billing period.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-blue-950 to-black">
          <div className="container p-7">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Take Control of Your Finances?
              </h2>
              <p className="text-lg text-blue-100/70 max-w-2xl mx-auto mb-8">
                Join thousands of users who have transformed their financial lives with MoneyMate
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to='/signup'>Get Started Free</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blue-700 text-blue-300 hover:bg-blue-900/20">
                  See Demo
                </Button>
              </div>
              <p className="mt-4 text-sm text-blue-100/60">No credit card required. Free plan available forever.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-blue-900/50">
        <div className="container p-7">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-white">MoneyMate</span>
              </div>
              <p className="text-blue-100/70 mb-4">Smart expense tracking for modern life</p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://github.com/nitintwt/MoneyMate" className="text-blue-400 hover:text-blue-300">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-100/70 hover:text-blue-300">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100/70 hover:text-blue-300">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100/70 hover:text-blue-300">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100/70 hover:text-blue-300">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-100/70 hover:text-blue-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100/70 hover:text-blue-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100/70 hover:text-blue-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100/70 hover:text-blue-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-100/70 hover:text-blue-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100/70 hover:text-blue-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100/70 hover:text-blue-300">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-900/30 text-center">
            <p className="text-blue-100/60 text-sm">© {new Date().getFullYear()} MoneyMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

