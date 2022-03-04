export function BlobFileToExcel(blob, name) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([blob]));
    link.download = name;
    link.click();
    URL.revokeObjectURL(link.href);
}