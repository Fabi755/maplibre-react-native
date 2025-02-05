//
//  RCTMLNCameraManager.m
//  RCTMLN
//
//  Created by Nick Italiano on 6/22/18.
//  Copyright © 2018 Mapbox Inc. All rights reserved.
//

#import "RCTMLNCameraManager.h"
#import "RCTMLNCamera.h"

@implementation RCTMLNCameraManager

RCT_EXPORT_MODULE(RCTMLNCamera)

#pragma - View Properties

RCT_EXPORT_VIEW_PROPERTY(stop, NSDictionary)

RCT_EXPORT_VIEW_PROPERTY(followUserLocation, BOOL)
RCT_EXPORT_VIEW_PROPERTY(followUserMode, NSString)
RCT_EXPORT_VIEW_PROPERTY(followZoomLevel, NSNumber)
RCT_EXPORT_VIEW_PROPERTY(followPitch, NSNumber)
RCT_EXPORT_VIEW_PROPERTY(followHeading, NSNumber)

RCT_EXPORT_VIEW_PROPERTY(alignment, NSString)

RCT_EXPORT_VIEW_PROPERTY(maxBounds, NSString)

RCT_EXPORT_VIEW_PROPERTY(maxZoomLevel, NSNumber)
RCT_EXPORT_VIEW_PROPERTY(minZoomLevel, NSNumber)

RCT_EXPORT_VIEW_PROPERTY(onUserTrackingModeChange, RCTBubblingEventBlock)

RCT_EXPORT_VIEW_PROPERTY(defaultStop, NSDictionary)

#pragma Methods

- (BOOL)requiresMainQueueSetup
{
    return YES;
}

- (UIView *)view
{
    return [[RCTMLNCamera alloc] init];
}

@end
