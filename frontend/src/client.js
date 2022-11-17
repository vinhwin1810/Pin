import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "3riq23gc",
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: true,
  token:
    "sknf6RJ7My5BWbWzQ1R3vNhdouhF7jWfS2SeIqnoIpbFBCiLNgqejn6WhcIQQSo93bf3EzI2MxYH0MdpohX8bOoDdM9YY6NWxB5iWGu7soFAbWMa0I1XvgUZFIVO9rCJIm25w8J6WfNsAzMeMRyAc7OLdBSeTLRdjWh4u1mNDcJAOpH8qm61",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
