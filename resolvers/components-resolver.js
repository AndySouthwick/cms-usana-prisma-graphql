module.exports = {
  Mutation: {
    createComponent(root, args, context){
      return context.prisma.createComponent({
        heroIs: args.heroIs,
        cardIs: args.cardIs,
        textCenterIs: args.textCenterIs,
        textLeftIs: args.textLeftIs,
        textRightIs: args.textRightIs,
        componentOrderNum: args.componentOrderNum,
        page: {
          connect: {id: args.pageId}
        }
      })
    },
    deleteComponent(root, args, context){
      context.prisma.deleteComponent({
        id: args.componentId
      })
    },
    orderComponentsOnPage(root, args, context){
      // console.log(args.componentId, args.orderNumber, args.pageId)
      return context.prisma.updateComponent({
          where: { id: args.componentId },
          data: { componentOrderNum: args.orderNumber}
        }
      )
    },
  },
  Query: {
    components(root, args, context){
      return context.prisma.components()
    },

    componentsOnPage(root, args, context){
      return context.prisma.page({
          id: args.pageId,
      }).components({
        orderBy: args.orderBy
      })
    }
  },
  Component: {
    page(root, args, context) {
      return context.prisma.component({
          id: root.id,
        }).page()
    },
    textCenterSection(root, args, context){
      return context.prisma.component({
        id: root.id
      }).textCenterSection()
    },
    textLeftSection(root, args, context){
      return context.prisma.component({
        id: root.id
      }).textLeftSection()
    },
    textRightSection(root, args, context){
      return context.prisma.component({
        id: root.id
      }).textRightSection()
    },
    heroSlides(root, args, context){
      return context.prisma.component({
        id: root.id
      }).heroSlides()
    },
    cards(root, args, context){
      return context.prisma.component({
        id: root.id
      }).cards()
    }
  }
}