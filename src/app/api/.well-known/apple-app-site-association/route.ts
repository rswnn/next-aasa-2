
const BUNDLE_ID = 'V9BD9383F2.com.connectthedots.dots' // replace with your bundle ID

const association = {
  applinks: {
    apps: [],
    details: [
      {
        appID: `${BUNDLE_ID}`,
        paths: ['*'],
      },
    ],
  },
}

export async function GET(_: Request) {
  return Response.json(association)
}