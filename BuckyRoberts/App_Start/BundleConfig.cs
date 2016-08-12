﻿using System.Web;
using System.Web.Optimization;
using System.Web.Optimization.React;

namespace ReactDemo
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new BabelBundle("~/bundles/react").Include(
                "~/scripts/react-15.3.0.min.js",
                "~/scripts/react-dom-15.3.0.min.js"
            ));

            // Forces files to be combined and minified in debug mode
            // Only used here to demonstrate how combination/minification works
            // Normally you would use unminified versions in debug mode.
            BundleTable.EnableOptimizations = true;
        }
    }
}
