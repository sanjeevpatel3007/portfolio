// app/blog/[slug]/page.js

import { blogData } from "@/utils/data/blog";
import Link from "next/link";

// Function to get the blog by slug
async function getBlog(slug) {
    const blog = blogData.find(b => b.id === Number(slug)); // Use id to find the blog

    if (!blog) {
        throw new Error('Blog not found');
    }

    return blog;
}

// Blog details component
async function BlogDetails({ params }) {
    const slug = params.slug;
    const blog = await getBlog(slug);

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-200">{blog.title}</h1>
            <p className="text-gray-400 mb-4">{blog.intro}</p>

            {/* Cover Image */}
            <img 
                src={blog.coverImage} 
                alt={blog.title} 
                className="my-5 w-full mx-auto h-64 md:h-96 rounded shadow-lg object-cover" 
            />

            {/* Flexbox layout for content and image */}
            <div className="flex flex-col md:flex-row md:space-x-8 my-8">
              
                {/* Blog Content Section (Left) */}
                <div className="md:w-2/3">
                    {Object.entries(blog.content).map(([key, section]) => (
                        <div key={key} className="mb-8">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-200">{section.heading}</h2>
                            {section.subheading && (
                                <h3 className="text-lg md:text-xl font-medium text-gray-400 mt-2">
                                    {section.subheading}
                                </h3>
                            )}
                            {Array.isArray(section.paragraphs) && section.paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-gray-500 mt-3 text-sm md:text-base">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Blog Image Section (Right) */}
                <div className="hidden md:block md:w-1/3 mt-6 md:mt-12 lg:mt-24">
                    <img 
                        src={blog.paraImage} 
                        alt={blog.title} 
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>

            </div>

            {/* Blog Details Section */}
            <div className="mb-5">
                <h3 className="text-lg font-semibold text-gray-200">Details</h3>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                    <li><strong>Category:</strong> {blog.category}</li>
                    <li><strong>Tags:</strong> {blog.tags.join(', ')}</li>
                    <li><strong>Published on:</strong> {blog.date}</li>
                    <li><strong>Author:</strong> {blog.author}</li>
                    {/* Check for meta existence */}
                    {blog.meta && (
                        <>
                            <li><strong>Reading Time:</strong> {blog.meta.readingTime || 'N/A'}</li>
                            <li><strong>Keywords:</strong> {blog.meta.keywords?.join(', ') || 'N/A'}</li>
                            <li><strong>Language:</strong> {blog.meta.language || 'N/A'}</li>
                        </>
                    )}
                </ul>
            </div>

            {/* Back to Blogs Button */}
            <div className="mt-8 text-center">
                <Link href="/blog" legacyBehavior>
                    <a className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                        Back to Blogs
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default BlogDetails;
