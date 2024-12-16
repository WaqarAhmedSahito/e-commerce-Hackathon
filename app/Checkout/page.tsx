import Image from "next/image";
import Button from "../component/Button";
function InputField({ id = "text", label = "text", type = "text", required = false }) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required={required}
            />
        </div>
    );
}
export default function Checkout() {
    return (
        <div>
            <header className="bg-white p-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Image src="/nikelogo.png" alt="Nike Logo" width={100} height={30} />
                    </div>
                    <div className="flex items-center space-x-6">
                        <span className="text-sm text-gray-700">000 800 100 9538</span>
                        <div className="flex space-x-4">
                            <Image src="/message-icon.png" alt="Message Icon" width={24} height={24} />
                            <Image src="/bag-icon.png" alt="Shopping Cart Icon" width={24} height={24} />
                        </div>
                    </div>
                </div>
            </header>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8 px-24 py-6">
                {/* Left Section: Delivery and Address Form */}
                <div className="w-full lg:w-2/3 bg-white p-6 rounded-md shadow-sm">
                    <h2 className="text-lg font-semibold mb-2">How would you like to get your order?</h2>
                    <p className="text-sm text-gray-600 mb-4">
                        Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.
                        <a href="#" className=" underline">Learn More</a>
                    </p>
                    <button className="flex items-center justify-start border border-black rounded-md p-6 w-full hover:bg-gray-100 transition">
                        <Image src="/deliver.png" alt="Delivery Icon" className="w-6 h-6 mr-4" />
                        <span className="font-medium text-gray-700">Deliver It</span>
                    </button>
                    <main>
                        <div className="space-y-4 mt-12">
                            <h2 className="font-bold">Enter Your Name And Address:</h2>
                            {/* Reusable Input Fields */}
                            <InputField id="first_name" label="First Name" required />
                            <InputField id="last_name" label="Last Name" required />
                            <InputField id="address_1" label="Address Line 1" required />
                            <p className="ml-4 text-xs">We do not ship to P.O. boxes</p>
                            <InputField id="address_2" label="Address Line 2" />
                            <InputField id="address_3" label="Address Line 3" />
                            <div className="grid grid-cols-2 gap-4">
                                <InputField id="postal_code" label="Postal Code" required />
                                <InputField id="locality" label="Locality" required /><InputField id="state" label="State/Territory" /><InputField id="state" label="India" />

                            </div>
                            <label className="block text-sm text-gray-700"> <input type="checkbox" name="shipping" className="mr-2" />Save this address to my profile
                            </label>
                            <label className="block text-sm text-gray-700"> <input type="checkbox" name="shipping" className="mr-2" />Make this my preferred address
                            </label>
                            <h2 className="font-bold text-lg">
                                What&apos;s your contact information?
                            </h2>
                            <InputField id="email" label="Email" type="email" required />
                            <p className="ml-4 text-xs">A confirmation email will be sent after checkout.</p>
                            <InputField id="phone_number" label="Phone Number" type="tel" required />
                            <p className="text-xs ml-4">A carrier might contact you to confirm delivery.</p>
                            <h2 className="font-semibold text-xl ">What&apos;s your PAN?</h2>
                            <InputField id="pan" label="PAN" required />
                            <p className="text-xs ml-4">Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
                            <label className="block text-sm text-gray-700"> <input type="checkbox" name="shipping" className="mr-2" />Save PAN details to Nike Profile
                            </label>
                            <label className="block text-sm text-gray-700 pt-16 text-left"> <input type="checkbox" name="shipping" className="mr-2" />I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.
                            </label>
                            <Button text="Continue" classNames="border rounded-lg p-4" />
                        </div>
                        <div className="mt-8 pt-3">
                            <h3 className="text-lg font-medium mb-4 pt-4  border-t-2">Delivery</h3>
                            <h3 className="text-lg font-medium mb-4 pt-4 border-t-2">Shipping</h3>
                            <h3 className="text-lg font-medium mb-4 pt-4  border-t-2">Billing</h3>
                            <h3 className="text-lg font-medium mb-4 pt-4  border-t-2">Payment</h3>
                        </div>
                    </main>
                </div>
                {/* Right Section: Bag and Summary */}
                <section className="w-[320px] lg:w-1/3 flex flex-col  p-8 rounded-md shadow-sm">
                    <section className="flex flex-col">
                        <h1 className="font-semibold mb-6">Order Summary</h1>
                        <div className="flex font-medium text-sm justify-between">
                            <h1>Subtotal</h1>
                            <h2>₹ 20 890.00</h2>
                        </div>
                        <div className="flex font-medium text-sm space-x-40 justify-between my-4">
                            <h1>Estimated Delivery & Handling</h1>
                            <h2>Free</h2>
                        </div>
                        <hr />
                        <div className="flex font-semibold text-sm space-x-40 justify-between my-4">
                            <h1>Total</h1>
                            <h2>₹ 20 890.00</h2>
                        </div>
                        <hr />
                    </section>
                    <div>
                        <div className=" flex items-center justify-between text-center">
                            <p className="text-xs text-nowrap">(The total reflects the price of your order, including all duties and taxes)</p>
                        </div>
                        <div className="mt-4 mb-10">
                            <h2 className="font-semibold text-xl">Arrives Mon, 27 Mar - Wed, 12 Apr</h2>
                            <div className="md:flex md:space-x-10 mx-20 md:mx-0 mt-6">
                                <Image
                                    src={"/product/product-1.png"}
                                    alt="shoe"
                                    width={180}
                                    height={150}
                                />
                                <div className="space-y-8">
                                    <div className="text-wrap justify-between font-semibold text-[12px] md:text-lg md:gap-x-28">
                                        <h1>Nike Dri-FIT ADV TechKnit Ultra</h1>
                                        <p>MRP: ₹ 3 895.00</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-sm text-[#757575] ">
                                            Size : L<span className="ml-6">Qantity: 1</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-6" />
                            <div className="md:flex md:space-x-10 mx-20 md:mx-0 mt-6">
                                <Image
                                    src="/product/product-7.png"
                                    alt={"shoe"}
                                    width={180}
                                    height={150}
                                />
                                <div className="space-y-8">
                                    <div className="text-wrap justify-between font-semibold text-[12px] md:text-lg md:gap-x-28">
                                        <h1>Nike Air Max 97 SE</h1>
                                        <p>MRP: ₹ 16 995.00</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-sm text-[#757575] ">
                                            Size : M<span className="ml-6">Qantity: 8 </span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Summary Section */}
                </section>
            </div>
            <footer className="bg-black text-white py-4 mt-8">
                <div className="container mx-auto px-2">
                    <div className="flex justify-between items-center">
                        {/* Location */}
                        <div className="text-xs">India</div>
                        <div className="flex space-x-4 text-xs">
                            <a href="#" className="hover:underline">© 2023 Nike, Inc. All Rights Reserved</a>
                            <a href="#" className="hover:underline">Terms of Use</a>
                            <a href="#" className="hover:underline">Terms of Sale</a>
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </div>
                        {/* Payment Icons */}
                        <div className="flex space-x-4">
                            <Image src="/visa-icon.png" alt="Visa" className="w-6 h-6" />
                            <Image src="/mastercard-logo.png" alt="Mastercard" className="w-6 h-6" />
                            <Image src="/paypal-icon.png" alt="Paypal" className="w-6 h-6" />
                            <Image src="/maestro-icon.png" alt="Discover" className="w-6 h-6" />
                            <Image src="/americanexpress-icon.png" alt="Discover" className="w-6 h-6" />
                            <Image src="/dinersclub-logo.png" alt="Discover" className="w-6 h-6" />
                            <Image src="/discover-logo.png" alt="Discover" className="w-6 h-6" />
                            <Image src="/bank-logo.png" alt="Bank" className="w-6 h-6" />
                            <Image src="/paytm-logo.png" alt="Paytm" className="w-6 h-6" />
                            <Image src="/upi-logo.png" alt="UPI" className="w-6 h-6" />
                            <Image src="/jcb-logo.png" alt="UPI" className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}