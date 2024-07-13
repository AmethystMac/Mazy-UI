/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects : async () => {
        return [
            {
                source : "/",
                destination : "/note",
                permanent : true,
            }
        ]
    },
};

export default nextConfig;