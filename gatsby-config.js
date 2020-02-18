module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/atoliveira/f0fbea6e8b504ad6acdf8f65f860c147?v=b2be8dc9265b4b858de62a9c95288d43"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/atoliveira/1cab195985584d7aa8ada8e2c5d7d6e7?v=86e7312be90f47b89fae95424e8097ba"
            }
        }
    ],
}
