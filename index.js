const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // * Create a new post
//   const post = await prisma.post.create({
//     data: {
//         title: 'Titulo 5',
//         content: 'Mi quinto post',
//     }
//   })

//   const posts = await prisma.post.createMany({
//     data:[
//         {title: 'Titulo 2', content: 'Mi segundo post'},
//         {title: 'Titulo 3', content: 'Mi tercer post'},
//         {title: 'Titulo 4', content: 'Mi cuarto post'},
//     ]
//   })
//   console.log(posts)

    // * All posts
    // const allPosts = await prisma.post.findMany()
    // console.log(allPosts)

    // * One post
    // const onePost = await prisma.post.findUnique({
    //     where: {
    //         id: 2
    //     }
    // })
    // console.log(onePost)

    // * Update post
    // const updatePost = await prisma.post.update({
    //     where: {
    //         id: 4
    //     },
    //     data: {
    //         title: 'Titulo 4 - Actualizado',
    //         content: 'Mi cuarto post - Actualizado'
    //     }
    // })
    //console.log(updatePost)

    // * Delete post
    const deletePost = await prisma.post.delete({
        where: {
            id: 5
        }
    })
    console.log(deletePost)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })