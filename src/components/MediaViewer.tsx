'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ExternalLink, Play } from 'lucide-react';

interface MediaItem {
  id: string;
  title: string;
  description: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  thumbnailUrl?: string;
}

interface MediaViewerProps {
  item: MediaItem;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export function MediaViewer({
  item,
  onNext,
  onPrevious,
  hasNext = false,
  hasPrevious = false,
}: MediaViewerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <Card className="overflow-hidden bg-background">
      <div className="relative">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          {item.mediaType === 'image' ? (
            <img
              src={item.mediaUrl}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <>
              {!isPlaying ? (
                <div className="relative h-full w-full">
                  <img
                    src={item.thumbnailUrl || item.mediaUrl}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-16 w-16 rounded-full opacity-90 hover:opacity-100"
                      onClick={handlePlayVideo}
                    >
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                </div>
              ) : (
                <iframe
                  src={`${item.mediaUrl}?autoplay=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              )}
            </>
          )}
        </AspectRatio>

        {/* Navigation buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          {hasPrevious && (
            <Button
              variant="ghost"
              size="icon"
              className="ml-2 rounded-full bg-background/80 hover:bg-background"
              onClick={onPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          )}
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          {hasNext && (
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 rounded-full bg-background/80 hover:bg-background"
              onClick={onNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-muted-foreground">{item.description}</p>
          </div>
          <Button variant="outline" size="icon" asChild>
            <a href={item.mediaUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
} 