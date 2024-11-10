
export default function Contact(){
    return(
        <div className="text-center p-6">
        <h1 className="text-2xl font-bold mb-4 text-white">Contact Me</h1>
        <p className="text-gray-400 mb-8">Feel free to get in touch with me using the form below.</p>
        <form className="flex flex-col items-center max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="border rounded p-2 w-full" required />
          <input type="email" placeholder="Your Email" className="border rounded p-2 w-full" required />
          <textarea placeholder="Your Message" className="border rounded p-2 w-full" x-4 required></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </div>
         )

}