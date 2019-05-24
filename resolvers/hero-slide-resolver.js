module.exports = {
  Mutation: {
    createHeroSlide(root, args, context) {
      return context.prisma.createHeroSlide({
        image: args.image,
        title: args.title,
        subTitle: args.subTitle,
        buttonText: args.buttonText,
        buttonClass: args.buttonClass,
        buttonLink: args.buttonLink,
        component: {
          connect: {id: args.componentId}
        }
      })
    },
    async deleteHeroSlide(root, args, context) {
      await context.prisma.deleteHeroSlide({
        id: args.id
      })
      return await context.prisma.deleteComponent({
        id: args.componentId
      })
    }
  }
}