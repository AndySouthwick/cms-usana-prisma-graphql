module.exports = {
  Mutation: {
    createCard(root, args, context) {
      return context.prisma.createCard({
        image: args.image,
        title: args.title,
        blobInfo: args.blobInfo,
        buttonText: args.buttonText,
        buttonClass: args.buttonClass,
        buttonLink: args.buttonLink,
        isRouterLink: args.isRouterLink,
        component: {
          connect: {id: args.componentId}
        }
      })
    },
    async deleteCard(root, args, context) {
      await context.prisma.deleteCard({
        id: args.id
      })
      return await context.prisma.deleteComponent({
        id: args.componentId
      })
    }
  }
}