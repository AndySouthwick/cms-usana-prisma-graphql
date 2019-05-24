module.exports = {
  Mutation: {
    createTextLeft(root, args, context){
      return context.prisma.createTextLeft({
        image: args.image,
        content: args.content,
        title: args.title,
        component: {
          connect: {id: args.componentId}
        }
      })
    },
    async updateTextLeft(root, args, context){
      return await context.prisma.updateTextLeft({
        where: {id: args.id},
        data: {
          image: args.image,
          content: args.content,
          title: args.title
        }
      })
    },
    async deleteTextLeft(root, args, context){
      await context.prisma.deleteTextLeft({
        id: args.id
      })
      return await context.prisma.deleteComponent({
        id: args.componentId
      })
    }
  }
}