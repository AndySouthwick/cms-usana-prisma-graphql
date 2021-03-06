module.exports = {
  Query: {
    page(root, args, context){
      return context.prisma.page({
       id: args.pageId,
      })
    }
  },
  Mutation: {
    createDraft(root, args, context) {
      return context.prisma.createPage({
        title: args.title,
        user: {
          connect: { id: args.userId },
        },
      })
    },
    publish(root, args, context) {
      return context.prisma.updatePage({
        where: { id: args.pageId },
        data: { published: true },
      })
    },
  },
  Page: {
    user(root, args, context) {
      console.log('from user in page', root.id)
      return context.prisma.page({
          id: root.id,
        }).user()
    },
    components(root, args, context){
      console.log('this ran')
      return context.prisma.page({
        id: root.id,
      }).components()
    }
  }
}