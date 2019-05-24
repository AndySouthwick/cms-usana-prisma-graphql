module.exports = {
  Mutation: {
    async createTextCenter(root, args, context){
      return await context.prisma.createTextCenter({
        image: args.image,
        content: args.content,
        title: args.title,
        component: {
          connect: {id: args.componentId}
        }
      })
    },
    async updateTextCenter(root, args, context){
      return await context.prisma.updateTextCenter({
        where: {id: args.id},
        data: {
          image: args.image,
          content: args.content,
          title: args.title
        }
      })
    },
    async deleteTextCenter(root, args, context){
      await context.prisma.deleteTextCenter({
        id: args.id
      })
      return await context.prisma.deleteComponent({
        id: args.componentId
      })
    }
  }
}