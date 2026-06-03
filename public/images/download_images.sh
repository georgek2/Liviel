#!/bin/bash

# Hero image
curl -o hero-banner.png "https://media.base44.com/images/public/6a1882081889b675b2917e8a/daa2fa2db_generated_d4ce6cae.png"

# Tour images
curl -o tour-1-dubai.png "https://media.base44.com/images/public/6a1882081889b675b2917e8a/9199988cc_generated_869e6acc.png"
curl -o tour-2-abudhabi.png "https://media.base44.com/images/public/6a1882081889b675b2917e8a/4683e158d_generated_ba3ed399.png"
curl -o tour-3-desert.png "https://media.base44.com/images/public/6a1882081889b675b2917e8a/09e8e9520_generated_4513ad69.png"
curl -o tour-4-beach.png "https://media.base44.com/images/public/6a1882081889b675b2917e8a/ed8c28f43_generated_a26c1a35.png"
curl -o tour-5-mountain.png "https://media.base44.com/images/public/6a1882081889b675b2917e8a/9f3cfa316_generated_f686a4f0.png"
curl -o tour-6-cultural.png "https://media.base44.com/images/public/6a1882081889b675b2917e8a/598a4373f_generated_image.png"
curl -o tour-7-adventure.png "https://media.base44.com/images/public/6a1882081889b675b2917e8a/35ffcbbc5_generated_image.png"
curl -o tour-8-luxury.png "https://media.base44.com/images/public/6a1882081889b675b2917e8a/11d50c225_generated_image.png"

echo "✅ All images downloaded successfully!"
ls -lh *.png
