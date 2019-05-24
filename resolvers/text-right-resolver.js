module.exports = {
  Mutation: {
    createTextRight(root, args, context){
      return context.prisma.createTextRight({
        image: args.image,
        content: args.content,
        title: args.title,
        component: {
          connect: {id: args.componentId}
        }
      })
    },
    async updateTextRight(root, args, context){
      return await context.prisma.updateTextRight({
        where: {id: args.id},
        data: {
          image: args.image,
          content: args.content,
          title: args.title
        }
      })
    },
    async deleteTextRight(root, args, context){
      await context.prisma.deleteTextRight({
        id: args.id
      })
      return await context.prisma.deleteComponent({
        id: args.componentId
      })
    }
  }
}