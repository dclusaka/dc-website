// Shared Supabase client used across the login, members, admin, apply,
// and card pages.
const SUPABASE_URL = "https://rrrbiqxjiokmvanmmrda.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_W5l17wCvZgTNRR5kWRUDSw_WvrxCQrB";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Resizes and compresses an image file in the browser before upload, so
// full-size phone-camera photos (often several MB) don't eat into
// Supabase's free storage limit. outputType lets logos with transparency
// stay as PNG instead of being flattened to JPEG.
function resizeImageFile(file, maxDimension = 800, quality = 0.82, outputType = 'image/jpeg') {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => { img.src = e.target.result; };
    reader.onerror = reject;
    img.onerror = reject;

    img.onload = () => {
      let { width, height } = img;

      if (width > height && width > maxDimension) {
        height = Math.round(height * (maxDimension / width));
        width = maxDimension;
      } else if (height > maxDimension) {
        width = Math.round(width * (maxDimension / height));
        height = maxDimension;
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => blob ? resolve(blob) : reject(new Error('Could not process image')),
        outputType,
        quality
      );
    };

    reader.readAsDataURL(file);
  });
}
